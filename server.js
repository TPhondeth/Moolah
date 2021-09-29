// Dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
// Import sequelize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
const helpers = require('./utils/helpers');
const hbs = exphbs.create({
    helpers
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(session(sess));

// Path to the public directory for js/css files
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});