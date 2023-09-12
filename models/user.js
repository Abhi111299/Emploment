// External Dependancies
import { Schema, model } from "mongoose";
import envConstants from "../enviromentVariables.js";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  f_name: {
    type: String,
    max: 20,
    required: [true],
  },
  l_name: {
    type: String,
    max: 20,
    required: [true],
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Invalid email format"],
    unique: true,
    validate: {
      validator: async function (email) {
        const count = await this.model("User").count({ email }).exec();
        return !count;
      },
      message: (props) =>
        `${props.value} is Already in use, please use different email`,
    },
  },
  password: {
    type: String,
    required: [true],
    select: false,
  },
  email_verified: {
    type: Boolean,
    default: false,
  },
  role: [{
    type: Schema.Types.ObjectId,
    ref: 'Role',
    required: [true],
    validate: {
        validator: async function(role) {
            const count = await this.model('Role').count({ _id: role }).exec();
            return count;
        },
        message: props => `"${props.value}" Invalid Role ID. Role doesn't exist by this ID.`
    },
}],
});
UserSchema.set("timestamps", true);

UserSchema.pre("save", async function save(next) {
  try {
    const salt = await bcrypt.genSalt(parseInt(envConstants.salt_work_factor));
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    console.error(
      `Errored while saving the password in hash form for user ${this.email}`,
    );
    console.error(err);
    return next(err);
  }
});

UserSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

export default model("User", UserSchema);
