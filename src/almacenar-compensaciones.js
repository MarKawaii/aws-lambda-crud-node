const AWS = require('aws-sdk');

const AlmacenarCompensaciones = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    try {
        const { id_sap, agno, compensaciones } = JSON.parse(event.body);

        // Asegúrate de que id_sap sea una cadena
        const idSapString = id_sap.toString();

        // Verifica si el registro ya existe
        const result = await dynamodb.get({
            TableName: "CompensacionesTableNew",
            Key: {
                id_sap: idSapString
            }
        }).promise();

        let item;
        const createdAt = new Date().toISOString();

        if (result.Item) {
            // Si el registro existe, verifica si el año ya está presente
            item = result.Item;

            if (!item.hasOwnProperty(agno)) {
                // Si el año no existe, agregar las compensaciones para ese año
                item[agno] = compensaciones;
                item.updatedAt = createdAt;  // Agregar un campo de actualización opcional

                // Actualiza el item en DynamoDB
                await dynamodb.put({
                    TableName: "CompensacionesTableNew",
                    Item: item
                }).promise();

                return {
                    statusCode: 200,
                    body: JSON.stringify({ message: "Compensaciones agregadas para el nuevo año" }),
                };
            } else {
                // Si el año ya existe, devolver un mensaje apropiado
                return {
                    statusCode: 400,
                    body: JSON.stringify({ message: "El año ya existe para este id_sap" }),
                };
            }
        } else {
            // Si el registro no existe, crea uno nuevo
            item = {
                id_sap: idSapString,
                createdAt: createdAt,
                [agno]: compensaciones
            };

            // Inserta el nuevo item en DynamoDB
            await dynamodb.put({
                TableName: "CompensacionesTableNew",
                Item: item
            }).promise();

            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Nuevo registro de compensaciones creado exitosamente" }),
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error", error: error.message }),
        };
    }
};

module.exports = {
    AlmacenarCompensaciones,
};
