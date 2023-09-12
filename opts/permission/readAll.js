import PermissionController from "../../controllers/permission.js";
import { AllPermissions, tags } from "./common.js";
import { verifyToken } from "../../middleware/auth.js";

// Options for get all Permissions
export const getPermissionsOpts = {
  schema: {
    tags,
    response: {
      200: {
        type: "object",
        properties: {
          count: { type: "integer" },
          pagination: { type: "string" },
          permissions: AllPermissions,
        },
      },
    },
    security: [{ apiKey: [] }],
  },
  handler: PermissionController.getPermissions,
  preHandler: [verifyToken],
};
