const { User } = require("../models");

const userData = [
  {
    name: "Joe Bloggs",
    email: "joe@test.com",
    password: "joejoejoe",
  },
  {
    name: "Ranbow",
    email: "ranbow@test.com",
    password: "ramramram",
  },
];

console.log(userData);

const userSeed = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = userSeed;
