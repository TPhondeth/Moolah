const {
    Post
} = require('../models');

const postData = [
    {
        title: " ",
        post_text: " ",
        user_id: 1,
    },
    {
        title: " ",
        post_text: " ",
        user_id: 2,
    },
    {
        title: " ",
        post_text: " ",
        user_id: 3,
    },
    {
        title: " ",
        post_text: " ",
        user_id: 4,
    },
    {
        title: " ",
        post_text: " ",
        user_id: 5,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;