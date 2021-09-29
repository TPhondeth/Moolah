// Dependencies
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Currency, Exchange } = require("../models");

<<<<<<< HEAD
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
=======
// Home page
router.get('/', (req, res) => {
    Post.findAll({

    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({
            plain: true
        }));

        res.render('homepage', {
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// Login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
>>>>>>> 11ef242c79c9c2b690efd013d2d5f090e95a8491

//   res.render("login");
// });

// Sign up page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

module.exports = router;