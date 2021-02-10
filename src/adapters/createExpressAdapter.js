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
      .then((httpResponse) => {
        if (httpResponse.headers) {
          response.set(httpResponse.headers);
        }
        response.type("json");
        response.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch((e) =>
        response.status(500).send({ error: "An unkown error occurred." })
      );
  };
}

module.exports = createExpressAdapter;
