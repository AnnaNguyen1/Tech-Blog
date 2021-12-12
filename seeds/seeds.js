const sequelize = require("../config/connection");

const userSeed = require("./userData");
const blogSeed = require("./blogData");
const commentSeed = require("./commentData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await userSeed();
  await blogSeed();
  await commentSeed();
  process.exit(0);
};

seedDatabase().catch((err) => console.log(err));
