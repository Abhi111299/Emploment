import AuthController from "../../controllers/auth.js";
import { SingleUserWithToken, tags } from "./common.js";

// Options for creating new user
export const postAuthLoginOpts = {
  schema: {
    tags,
    body: {
      type: "object",
      required: ["email", "password"],
      properties: {
        email: { type: "string" },
        password: { type: "string" },
      },
    },
    response: {
      200: SingleUserWithToken,
    },
  },
  handler: AuthController.login,
};
