import UsersController from "../../controllers/user.js";
import { verifyToken } from "../../middleware/auth.js";
import { SingleUser, tags } from "./common.js";

// Options for creating new user
export const postUserOpts = {
  schema: {
    tags,
    body: {
      type: "object",
      required: ["l_name", "f_name", "email", "password"],
      properties: {
        l_name: { type: "string" },
        f_name: { type: "string" },
        password: { type: "string" },
        email: { type: "string" },
      },
    },
    response: {
      201: SingleUser,
    },
    security: [{ apiKey: [] }],
  },
  handler: UsersController.addUser,
  // preHandler: [verifyToken],
};
