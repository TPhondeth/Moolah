// Import all models
const Currency = require('./Currency');
const Post = require('./Post');
const User = require('./User');
const Exchange = require('./Exchange');


// Create associations
User.hasMany(Currency, {
    foreignKey: 'user_id'
});

Currency.belongsTo(User, {
    foreignKey: 'user_id'
});

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
    Exchange
};