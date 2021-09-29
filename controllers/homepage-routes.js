// Dependencies
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Currency, Exchange } = require("../models");

router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    // attributes: ["id", "post_text", "title", "user_id"],
    // include: [
    //   {
    //     model: Currency,
    //     attributes: ["id", "currency", "currency_name", "price"],
    //     include: {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   },
    //   {
    //     model: User,
    //     attributes: ["username"],
    //   },
    // ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        //loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

module.exports = router;
