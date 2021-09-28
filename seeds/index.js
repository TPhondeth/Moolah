const seedUsers = require('./user-seeds');
const seedCurrencies = require('./currency-seeds');
const seedExchanges = require('./exchange-seeds');
const seedPosts = require('./post-seeds');

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

    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');

    await seedExchanges();
    console.log('\n----- EXCHANGES SEEDED -----\n');

    process.exit(0);
};

seedAll();
