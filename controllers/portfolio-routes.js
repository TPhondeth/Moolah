// Dependencies
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Currency, Exchange } = require("../models");

const withAuth = require("../utils/auth");

// Get all currencies for dashboard
router.get("/", withAuth, (req, res) => {
  Currency.findAll({
    where: {
      id: req.session.id,
    },
    attributes: ["id", "currency", "curr_ownd", "price"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbCurrencyData) => {
      const currency = dbCurrencyData.map((post) =>
        post.get({
          plain: true,
        })
      );
      res.render("portfolio", {
        currency,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Edit currencies on dashboard
router.get("/edit/:id", withAuth, (req, res) => {
  Currency.findByPk(req.params.id, {
    attributes: [
      "id",
      "currency",
      // 'currency_name',
      "price",
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbCurrencyData) => {
      if (dbCurrencyData) {
        const currency = dbCurrencyData.get({
          plain: true,
        });

        res.render("edit-currency", {
          currency,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
