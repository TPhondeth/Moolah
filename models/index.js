// Import all models
const Currency = require('./Currency');
const User = require('./User');

// Create associations
User.hasMany(Currency, {
    foreignKey: 'user_id'
});

Currency.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = {
    User,
    Currency
};