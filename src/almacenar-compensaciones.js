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

        if (result.Item) {
            // Si el registro existe, agrega las compensaciones al año correspondiente
            item = result.Item;
            item[agno] = compensaciones;
        } else {
            // Si el registro no existe, crea uno nuevo
            const createdAt = new Date().toISOString();

            item = {
                id_sap: idSapString,
                createdAt: createdAt,
                [agno]: compensaciones
            };
        }

        // Inserta o actualiza el item en DynamoDB
        await dynamodb.put({
            TableName: "CompensacionesTableNew",
            Item: item
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Compensaciones creadas exitosamente" }),
        };
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
