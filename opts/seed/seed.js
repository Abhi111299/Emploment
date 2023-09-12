import { fakerDE as faker } from '@faker-js/faker';
import { mongoose } from "mongoose";
import envConstants from "../../enviromentVariables.js";
import User from "../../models/user.js";
import Role from "../../models/role.js";

mongoose
  .connect(`${envConstants.connectionString}`)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

async function seedData() {
    await User.deleteMany();
    try {
        User.deleteMany();
        console.log('All Data successfully deleted');
      } catch (err) {
        console.log(err);
      }
    // create 5 fake data
    const seed_count = 5;
    let user = [];
    for (let i = 0; i < seed_count; i++) { 
        const f_name = faker.person.firstName();
        const l_name = faker.person.lastName();
        const email = faker.internet.email();
        const password = "1232313";
        const role = '64e88f12415225f012858dc3';
        const createdAt = new Date();
        const updatedAt = new Date(); //console.log(user);
        user.push({
          f_name,
          l_name,
          email,
          password,
          role,
          email,
          createdAt,
          updatedAt,
        });
        User.insertMany(user)
        .then(docs => console.log(`${docs.length} users have been inserted into the database.`))
        .catch(err => {
          console.error(err);
          console.error(`${err.writeErrors?.length ?? 0} errors occurred during the insertMany operation.`);
        });
    }
        return user;
}
seedData()