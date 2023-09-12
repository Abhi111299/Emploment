import envConstants from "../enviromentVariables.js";

export const swaggerOptions = {
  swagger: {
    info: {
      title: `${envConstants.app_title}`,
      description: `${envConstants.app_description}`,
      version: "1.0.0",
    },
    url: "/",
    host: `${envConstants.host}:${envConstants.port}`,
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {
      apiKey: {
        type: "apiKey",
        name: "x-access-token",
        in: "header",
      },
    },
  },
};

export const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};
