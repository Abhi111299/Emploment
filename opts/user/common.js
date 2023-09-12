// User schema
const dbSchemaPropertiesForResponse = {
  _id: { type: "string" },
  f_name: { type: "string" },
  l_name: { type: "string" },
  email: { type: "string" },
  role: { type: "string"},
  createdAt: { type: "string" },
  updatedAt: { type: "string" },
};

const userProperties = {
  message: { type: "string" },
  user: {
    type: "object",
    properties: dbSchemaPropertiesForResponse,
  },
};

export const AllUser = {
  type: "array",
  items: {
    type: "object",
    properties: dbSchemaPropertiesForResponse,
  },
};

export const SingleUser = {
  type: "object",
  properties: userProperties,
};

export const tags = ["User"];
