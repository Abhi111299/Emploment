import PermissionsController from "../../controllers/permission.js";
import { SinglePermission, tags } from "./common.js";

// Options for get single Permission by ID
export const getPermissionOpts = {
  schema: {
    tags,
    response: {
      200: SinglePermission,
    },
    security: [{ apiKey: [] }],
  },
  handler: PermissionsController.getPermission,
};
