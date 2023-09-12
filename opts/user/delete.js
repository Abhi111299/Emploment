import UsersController from "../../controllers/user.js";
import { SingleUser, tags } from "./common.js";
// Options for deleting a user by Id
export const deleteUserOpts = {
  schema: {
    tags,
    response: {
      200: SingleUser,
    },
    security: [{ apiKey: [] }],
  },
  handler: UsersController.deleteUser,
};
