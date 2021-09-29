// Dependencies
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Currency, Exchange } = require("../models");

// Home page
router.get('/', (req, res) => {
    Post.findAll({

    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({
            plain: true
        }));

        res.render('homepage');
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// Login page
router.get('/login', (req, res) => {

    res.render("login");
});

// Sign up page
router.get('/signup', (req, res) => {

    res.render('signup');
});

module.exports = router;