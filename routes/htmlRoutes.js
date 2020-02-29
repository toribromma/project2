// Dependencies
// =============================================================
// Importing the model (index.js) to use it's database functions
var index = require("../models/index.js");
var path = require("path");

module.exports = function (app) {

    // "practice" route loads "login.handlebars" page. Right now it shows the Cats! page (as a placeholder) but that's just a practice route to be deleted once the REAL login page is created.
    app.get("/", function (req, res) {
        res.render("practice");
    });

    // signup route loads login page.
    app.get("/signup", function (req, res) {
        res.render("signup");
    });


};