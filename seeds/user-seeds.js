<<<<<<< HEAD
const { User } = require('../models');

const userData = [
  {
    username: 'rgreen',
    email: 'rachelgreen@mail.com',
    password: 'password1'
  },
  {
    username: 'mgeller',
    email: 'monicageller@mail.com',
    password: 'password2'
  },
  {
    username: 'pbuffay',
    email: 'phoebebuffay@mail.com',
    password: 'password3'
  },
  {
    username: 'jtribbiani',
    email: 'joeytribbiani@mail.com',
    password: 'password4'
  },
  {
    username: 'cbing',
    email: 'chandlerbing@mail.com',
    password: 'password5'
  },
  {
    username: 'rgeller',
    email: 'rossgeller@mail.com',
    password: 'password6'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
=======
const sequelize = require('../config/connection');
const {
    User
} = require('../models');

const userData = [
    {
        username: 'tony',
        email: 'tony@gmail.com',
        password: 'password123'
    },
    {
        username: 'mikhael',
        email: 'mikhael@gmail.com',
        password: 'password123'
    },
    {
        username: 'sam',
        email: 'sam@gmail.com',
        password: 'password123'
    },
    {
        username: 'jap',
        email: 'jap@gmail.com',
        password: 'password123'
    },
    {
        username: 'mehtab',
        email: 'mehtab@gmail.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUsers;
>>>>>>> fe251787c9948de32ec5be36fcc931204cf3ae7e
