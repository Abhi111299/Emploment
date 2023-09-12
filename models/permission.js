// External Dependancies
import { Schema, model } from "mongoose";

const PermissionSchema = new Schema({
  name: {
    type: String,
    max: 50,
    required: [true],
    unique: true,
  },
  api: {
    type: String,
    max: 100,
    required: [true],
  },
  method: {
    type: String,
    max: 100,
    required: [true],
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});
PermissionSchema.set("timestamps", true);

PermissionSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

export default model("Permission", PermissionSchema);
