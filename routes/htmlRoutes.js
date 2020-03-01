// Dependencies
// =============================================================
// Importing the model (index.js) to use it's database functions
var index = require("../models/index.js");
var path = require("path");

module.exports = function (app) {

    // "practice" route loads "login.handlebars" page. Right now it shows the Cats! page (as a placeholder) but that's just a practice route to be deleted once the REAL login page is created.
    app.get("/", function (req, res) {
        res.render("intro");
    });

    app.get("/login", function (req, res) {
        res.render("logIn");
    });

    // signup route loads login page.
    app.get("/signup", function (req, res) {
        res.render("signUp");
    });

     // signup route loads login page.
     app.get("/profile", function (req, res) {
        res.render("profile");
    });

    app.get("/investment", function (req, res) {
        res.render("investment");
    });

    app.get("/properties", function (req, res) {
        res.render("properties");
    });

    app.get("/search", function (req, res) {
        res.render("search");
    });

};