import "dotenv/config";

const envConstants = {
  host: process.env.HOST,
  port: process.env.PORT,
  connectionString: process.env.CONNECTION_STRING,
  app_title: process.env.APP_TITLE,
  app_description: process.env.APP_DESCRIPTION,
  salt_work_factor: process.env.SALT_WORK_FACTOR,
  token_key: process.env.TOKEN_KEY,
  token_expiry: process.env.TOKEN_EXPIRY,
};

export default envConstants;
