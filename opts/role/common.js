import { dbSchemaPropertiesForResponse  as dbSchemaPropertiesForPermission} from '../permission/common.js';

// Role schema
const dbSchemaPropertiesForResponse = {
    _id: { type: "string" },
    name: { type: "string" },
    permissions: {
        type: "array",
        items: {
            type: "string",
            uniqueItems: true
        // type: "object",
        //     properties: dbSchemaPropertiesForPermission,
        },
    },
    is_active: { type: "boolean"},
    created_by: { type: "string" },
    createdAt: { type: "string" },
    updatedAt: { type: "string" },
  };
  
  const roleProperties = {
    message: { type: "string" },
    role: {
      type: "object",
      properties: dbSchemaPropertiesForResponse,
    },
  };
  
  export const AllRole = {
    type: "array",
    items: {
      type: "object",
      properties: dbSchemaPropertiesForResponse,
    },
  };
  
  export const SingleRole = {
    type: "object",
    properties: roleProperties,
  };
  
  export const tags = ["Role"];
  