// Import all models
const Currency = require('./Currency');
const Post = require('./Post');
const User = require('./User');
const Exchange = require('./Exchange');
const UserCurrency = require('./User-Currency');


// Create associations
// User.hasMany(Currency, {
//     foreignKey: 'user_id'
// });

// Currency.belongsTo(User, {
//     foreignKey: 'user_id'
// });

User.belongsToMany(Currency, {
    through: UserCurrency,
    foreignKey: 'user_id'
})

Currency.belongsToMany(User, {
    through: UserCurrency,
    foreignKey: 'currency_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});


module.exports = {
    User,
    Post,
    Currency,
    Exchange,
    UserCurrency
};