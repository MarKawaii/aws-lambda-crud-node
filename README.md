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

Esta plantilla no incluye ningún tipo de persistencia (base de datos). Para ejemplos más avanzados, consulta el repositorio de ejemplos de Serverless que incluye ejemplos con Typescript, Mongo, DynamoDB y otros.  [serverless/examples repository](https://github.com/serverless/examples/)

## Usage

### Deployment

Para desplegar el ejemplo, necesitas ejecutar el siguiente comando:

```serverless deploy```

After running deploy, you should see output similar to:

```
Deploying "serverless-http-api" to stage "dev" (us-east-1)

✔ Service deployed to stack serverless-http-api-dev (91s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: serverless-http-api-dev-hello (1.6 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [HTTP API (API Gateway V2) event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api).

### Invocation

After successful deployment, you can call the created application via HTTP:

```curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/```

Which should result in response similar to:

```json { "message": "Go Serverless v4! Your function executed successfully!" } ```

### Local development

The easiest way to develop and test your function is to use the `dev` command:

```serverless dev```

This will start a local emulator of AWS Lambda and tunnel your requests to and from AWS Lambda, allowing you to interact with your function as if it were running in the cloud.

Now you can invoke the function as before, but this time the function will be executed locally. Now you can develop your function locally, invoke it, and see the results immediately without having to re-deploy.

When you are done developing, don't forget to run `serverless deploy` to deploy the function to the cloud.
