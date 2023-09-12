import PermissionsController from "../../controllers/permission.js";
import { SinglePermission, tags } from "./common.js";

// Options for updating a Permission by ID
export const updatePermissionOpts = {
  schema: {
    tags,
    response: {
      200: SinglePermission,
    },
    security: [{ apiKey: [] }],
  },
  handler: PermissionsController.updatePermission,
};
