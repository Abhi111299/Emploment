// User schema
export const dbSchemaPropertiesForResponse = {
  _id: { type: "string" },
  name: { type: "string" },
  api: { type: "string" },
  is_active: { type: "boolean" },
  method: { type: "string" },
  createdAt: { type: "string" },
  updatedAt: { type: "string" },
};

const permissionProperties = {
  message: { type: "string" },
  permission: {
    type: "object",
    properties: dbSchemaPropertiesForResponse,
  },
};

export const AllPermissions = {
  type: "array",
  items: {
    type: "object",
    properties: dbSchemaPropertiesForResponse,
  },
};

export const SinglePermission = {
  type: "object",
  properties: permissionProperties,
};

export const tags = ["Permissions"];
