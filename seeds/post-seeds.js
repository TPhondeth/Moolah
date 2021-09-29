const {
    Post
} = require('../models');

const postData = [
    {
        title: " Hot Crpyto Right Now ",
        post_text: " adsfkasfasfsadfsd ",
        user_id: 1,
    },
    {
        title: " What To Buy ",
        post_text: " safsdfsdfsdfsd ",
        user_id: 2,
    },
    {
        title: " Crypto News ",
        post_text: " sfsdfsdffdfsdf ",
        user_id: 3,
    },
    {
        title: " Ethereum sucks ",
        post_text: " dsfsadfsdfdsfdsf ",
        user_id: 4,
    },
    {
        title: " NFT ",
        post_text: " sdffsdfsdsf ",
        user_id: 5,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;