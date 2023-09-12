import RolesController from "../../controllers/role.js";
import { SingleRole, tags } from "./common.js";
// Options for deleting a role by Id
export const deleteRoleOpts = {
  schema: {
    tags,
    response: {
      200: SingleRole,
    },
    security: [{ apiKey: [] }],
  },
  handler: RolesController.deleteRole,
};
