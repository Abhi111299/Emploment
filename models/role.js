import { Schema, model } from "mongoose";
import _ from "underscore";
const arr = [];
const rolesSchema = new Schema({
    name: {
        type: String,
        max: 50,
        required: [true],
        unique: true,
    },
    permissions: [{
        type: Schema.Types.ObjectId,
        ref: 'Permission',
        required: [true],
        
        validate: {
            validator: async function(permissions) {
+9 
                const count = await this.model('Permission').where('_id').in(permissions).exec();

                return count == permissions.length;
            },

            message: props => `"${props.value}" Invalid Permission IDs. Permission doesn't exist by this ID.`,

           
        },
    }],
      is_active: {
        type: Boolean,
        default: true,
      },
      created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true],
      },
    });
    rolesSchema.set("timestamps", true);

    rolesSchema.pre("save", async function save(next) {
        try {
            this.permissions = _.uniq(this.permissions, function(i) {return (i._id) ? i._id.toString() : i;});
          return next();
        } catch (err) {
          console.error(
            `Errored while saving the permissions with name ${this.name}`,
          );
          console.error(err);
          return next(err);
        }
      });
    
    rolesSchema.virtual("id").get(function () {
      return this._id.toHexString();
    });
    
    export default model("Role", rolesSchema);