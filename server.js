// Import the framework and instantiate it
import Fastify from "fastify";
import envConstants from "./enviromentVariables.js";
import mongoose from "mongoose";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

//import routes
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import permissionRoutes from "./routes/permission.js";
import roleRoutes from "./routes/role.js";

//import swagger options
import { swaggerOptions, swaggerUiOptions } from "./config/swaggerOptions.js";

const fastify = Fastify();

// Connect to DB
mongoose
  .connect(`${envConstants.connectionString}`)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

//add swagger docs
fastify.register(fastifySwagger, swaggerOptions);
fastify.register(fastifySwaggerUi, swaggerUiOptions);

// add Routes
const prefix = { prefix: "/api/v1" };
fastify.register(authRoutes, prefix);
fastify.register(userRoutes, prefix);
fastify.register(permissionRoutes, prefix);
fastify.register(roleRoutes, prefix);

// Run the server!
try {
  fastify.listen({ port: envConstants.port, host: envConstants.host });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
