function createExpressAdapter(controller) {
  return (request, response) => {
    const httpRequest = {
      body: request.body,
      query: request.query,
      params: request.params,
      ip: request.ip,
      method: request.method,
      path: request.path,
      headers: {
        "Content-Type": request.get("Content-Type"),
        Referer: request.get("referer"),
        "User-Agent": request.get("User-Agent"),
      },
    };

    controller(httpRequest)
      .then(({ headers, statusCode, body }) => {
        if (headers) {
          response.set(headers);
        }
        response.type("json");
        response.status(statusCode).send(body);
      })
      .catch((e) => {
        console.log(e)
        response.status(500).send({ error: "An unkown error occurred." })
      }
      );
  };
}

module.exports = createExpressAdapter;
