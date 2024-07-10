<!--
título: 'Ejemplo de Endpoint HTTP Simple de AWS en NodeJS'
descripción: 'Esta plantilla demuestra cómo hacer una API HTTP simple con Node.js ejecutándose en AWS Lambda y API Gateway utilizando el Framework Serverless.'
diseño: Doc
framework: v4
plataforma: AWS
idioma: nodeJS
enlaceAutor: 'https://github.com/serverless'
nombreAutor: 'Serverless, Inc.'
avatarAutor: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# API HTTP Node con Serverless Framework en AWS

Esta plantilla demuestra cómo hacer una API HTTP simple con Node.js ejecutándose en AWS Lambda y API Gateway utilizando el Framework Serverless.

Esta plantilla no incluye ningún tipo de persistencia (base de datos). Para ejemplos más avanzados, consulta el repositorio de ejemplos de Serverless que incluye ejemplos con Typescript, Mongo, DynamoDB y otros. [serverless/examples repository](https://github.com/serverless/examples/)





## Usage
### Deployment
Para desplegar el ejemplo, necesitas ejecutar el siguiente comando: `serverless deploy`

Después de ejecutar el despliegue, deberías ver una salida similar a:

```
Deploying "serverless-http-api" to stage "dev" (us-east-1)

✔ Servicio desplegado en el stack serverless-http-api-dev (91s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: serverless-http-api-dev-hello (1.6 kB)

```

Nota: En su forma actual, después del despliegue, tu API es pública y puede ser invocada por cualquiera. Para despliegues en producción, podrías querer configurar un autorizador. Para obtener detalles sobre cómo hacerlo, consulta la documentación del evento HTTP API [HTTP API (API Gateway V2) event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api).




### Invocación
Después de un despliegue exitoso, puedes llamar a la aplicación creada vía HTTP:

`curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/`
Lo cual debería resultar en una respuesta similar a:
`json { "message": "Go Serverless v4! Your function executed successfully!" } `


### Desarrollo local
La forma más fácil de desarrollar y probar tu función es usar el comando dev: `serverless dev`
Esto iniciará un emulador local de AWS Lambda y tunelará tus solicitudes hacia y desde AWS Lambda, permitiéndote interactuar con tu función como si estuviera ejecutándose en la nube.

Ahora puedes invocar la función como antes, pero esta vez la función se ejecutará localmente. Así, puedes desarrollar tu función localmente, invocarla y ver los resultados inmediatamente sin tener que redeployar.

Cuando hayas terminado de desarrollar, no olvides ejecutar `serverless deploy` para desplegar la función en la nube.

