import jwt from "jsonwebtoken";
import envConstants from "../enviromentVariables.js";

export const verifyToken = (reqest, reply, done) => {
  const reqBodyToken = reqest.body ? reqest.body.token : undefined;
  const token =
    reqBodyToken || reqest.query.token || reqest.headers["x-access-token"];

  if (!token) {
    reply.code(403).send({ error: "A token is required for authentication" });
  }
  try {
    const decoded = jwt.verify(token, envConstants.token_key);
    reqest.user = decoded;
  } catch (err) {
    reply.code(401).send({ error: "Invalid Token" });
  }
  done();
};
