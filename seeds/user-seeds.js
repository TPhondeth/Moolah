const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    username: "tony",
    email: "tony@gmail.com",
    password: "password123",
  },
  {
    username: "mikhael",
    email: "mikhael@gmail.com",
    password: "password123",
  },
  {
    username: "sam",
    email: "sam@gmail.com",
    password: "password123",
  },
  {
    username: "jap",
    email: "jap@gmail.com",
    password: "password123",
  },
  {
    username: "mehtab",
    email: "mehtab@gmail.com",
    password: "password123",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
  });

module.exports = seedUsers;
