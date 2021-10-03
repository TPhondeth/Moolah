// Dependencies
const router = require("express").Router();
const sequelize = require("../config/connection");
const {
    Post,
    User,
    Currency,
    Exchange
} = require("../models");
const getPrice = require('../public/javascript/currency')

<<<<<<< HEAD
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
=======
>>>>>>> 71ac84e461ee016797b891e238283d13afc5092e
// Home page
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        include: [{
            model: User,
            attributes: ['username', 'email'],
            include: {
                model: Currency,
                attributes: ['id', 'currency', 'currency_name', 'price']
            }
        }]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({
            plain: true
        }));
        const updatedPosts = getPrice(posts);
        res.render('homepage',
            updatedPosts);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Login page
router.get('/login', (req, res) => {
<<<<<<< HEAD
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
>>>>>>> 11ef242c79c9c2b690efd013d2d5f090e95a8491
=======
    
>>>>>>> 71ac84e461ee016797b891e238283d13afc5092e

    res.render("login");
});

// Sign up page
router.get('/signup', (req, res) => {

    res.render('signup');
});

module.exports = router;
