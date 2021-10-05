// Import all models
const Currency = require('./Currency');
const User = require('./User');
const UserCurrency = require('./User-Currency');

User.belongsToMany(Currency, {
    through: UserCurrency,
    foreignKey: 'user_id'
})

Currency.belongsToMany(User, {
    through: UserCurrency,
    foreignKey: 'currency_id'
})

module.exports = {
    User,
    Currency,
    UserCurrency
};