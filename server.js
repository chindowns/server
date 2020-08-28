require('dotenv').config();

const express = require("express");
const path = require("path");
// import routes from './routes';
const db = require('./models');

const app = express();
const PORT = process.env.PORT;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});