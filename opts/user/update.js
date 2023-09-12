import UsersController from "../../controllers/user.js";
import { SingleUser, tags } from "./common.js";

// Options for updating a User by ID
export const updateUserOpts = {
  schema: {
    tags,
    response: {
      200: SingleUser,
    },
    security: [{ apiKey: [] }],
  },
  handler: UsersController.updateUser,
};
