// Dependencies
// =============================================================
// Importing the model (index.js) to use it's database functions
var index = require("../models/index.js");
var path = require("path");

module.exports = function (app) {

    // logIn route loads "login.handlebars" page.
    app.get("/", function (req, res) {
        res.render("logIn");
    });

    // signUp route loads signUp.handlebars to create a profile.
    app.get("/signup", function (req, res) {
        res.render("signUp");
    });

    // profile route loads profile.handlebars page. User profile info and preferences are here.
    app.get("/profile", function (req, res) {
        res.render("profile");
    });

    // search route loads search.handlebars page. Main page to find properties on the map or with search bar.
    app.get("/search", function (req, res) {
        res.render("search");
    });

    // properties route loads "properties.handlebars" page. Shows attributes of the selected property.
    app.get("/properties/:id", function (req, res) {
        res.render("properties");
    });

    //  investment loads "investment.handlebars" page. Shows investment statistics of the selected property.
    app.get("/properties/investment/:id", function (req, res) {
        res.render("investment");
    });

};