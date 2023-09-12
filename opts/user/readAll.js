import UsersController from "../../controllers/user.js";
import { AllUser, tags } from "./common.js";
import { verifyToken } from "../../middleware/auth.js";

// Options for get all Users
export const getUsersOpts = {
  schema: {
    tags,
    response: {
      200: {
        type: "object",
        properties: {
          count: { type: "integer" },
          pagination: { type: "string" },
          users: AllUser,
        },
      },
    },
    security: [{ apiKey: [] }],
  },
  handler: UsersController.getUsers,
  preHandler: [verifyToken],
};
