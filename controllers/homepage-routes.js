// Dependencies
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Currency } = require("../models");
const getPrice = require("../public/javascript/currency");

// Home page
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "post_text", "title", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username", "email"],
        include: {
          model: Currency,
          attributes: ["id", "currency"],
        },
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) =>
        post.get({
          plain: true,
        })
      );
      const updatedPosts = getPrice(posts);
      res.render("homepage", updatedPosts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Sign up page
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
