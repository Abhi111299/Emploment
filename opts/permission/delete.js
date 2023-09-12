import PermissionController from "../../controllers/permission.js";
import { SinglePermission, tags } from "./common.js";
// Options for deleting a user by Id
export const deletePermissionOpts = {
  schema: {
    tags,
    response: {
      200: SinglePermission,
    },
    security: [{ apiKey: [] }],
  },
  handler: PermissionController.deletePermission,
};
