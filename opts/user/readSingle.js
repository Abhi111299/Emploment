import UsersController from "../../controllers/user.js";
import { SingleUser, tags } from "./common.js";

// Options for get single User by ID
export const getUserOpts = {
  schema: {
    tags,
    response: {
      200: SingleUser,
    },
    security: [{ apiKey: [] }],
  },
  handler: UsersController.getUser,
};
