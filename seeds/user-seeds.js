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