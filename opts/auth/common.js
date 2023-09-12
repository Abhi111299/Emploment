// User schema
const userProperties = {
  _id: { type: "string" },
  f_name: { type: "string" },
  l_name: { type: "string" },
  email: { type: "string" },
  token: { type: "string" },
  email_verified: { type: "boolean" },
};

export const SingleUserWithToken = {
  type: "object",
  properties: userProperties,
};

export const tags = ["Auth"];
