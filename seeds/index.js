<<<<<<< HEAD
// const seedCategories = require('./category-seeds');
const seedUsers = require('./user-seeds');
// const seedTags = require('./tag-seeds');
// const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');

  // await seedProducts();
  // console.log('\n----- PRODUCTS SEEDED -----\n');

  // await seedTags();
  // console.log('\n----- TAGS SEEDED -----\n');

  // await seedProductTags();
  // console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
=======
const seedUsers = require('./user-seeds');
const seedCurrencies = require('./currency-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({
        force: true
    });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedCurrencies();
    console.log('\n----- CURRENCIES SEEDED -----\n');

    process.exit(0);
};

seedAll();
>>>>>>> fe251787c9948de32ec5be36fcc931204cf3ae7e
