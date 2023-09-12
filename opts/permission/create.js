import PermissionController from "../../controllers/permission.js";
import { SinglePermission, tags } from "./common.js";

// Options for creating new user
export const postPermissionOpts = {
  schema: {
    tags,
    body: {
      type: "object",
      required: ["name", "api", "method"],
      properties: {
        name: { type: "string" },
        api: { type: "string" },
        method: { type: "string" },
        is_active: { type: "boolean" },
      },
    },
    response: {
      201: SinglePermission,
    },
    security: [{ apiKey: [] }],
  },
  handler: PermissionController.addPermission,
};
