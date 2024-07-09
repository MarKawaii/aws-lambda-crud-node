exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      response: 'success',
      message: "Mi proyecto serverless v4!",
    }),
  };
};
