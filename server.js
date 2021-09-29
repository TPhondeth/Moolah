// Dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
// Import sequelize connection
const sequelize = require('./config/connection');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Path to the public directory for js/css files
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});