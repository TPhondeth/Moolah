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