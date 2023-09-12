import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import envConstants from "../enviromentVariables.js";

// Display list of all Authors.
const login = async (request, reply) => {
  const email = request.body.email;
  const password = request.body.password;

  const user = await UserModel.findOne({ email }).select("+password").exec();
  if (user && (await bcrypt.compare(password, user.password))) {
    // Create token
    const token = jwt.sign({ id: user._id, email }, envConstants.token_key, {
      expiresIn: envConstants.token_expiry,
    });

    let userObject = user.toObject();
    delete userObject.password;
    userObject.token = token;

    reply.send(userObject);
  }
  reply.code(400).send({
    error: "Invalid email or password",
  });
};

const AuthController = {
  login,
};

export default AuthController;
