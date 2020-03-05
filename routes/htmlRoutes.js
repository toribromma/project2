// Dependencies
// =============================================================
// Importing the model (index.js) to use it's database functions
var index = require("../models/index.js");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    // "practice" route loads "login.handlebars" page. Right now it shows the Cats! page (as a placeholder) but that's just a practice route to be deleted once the REAL login page is created.
    app.get("/", function(req, res) {
        // // If the user already has an account send them to the members page
        // if (req.user) {
        //   res.render("search");
        // }
            res.render("index")
      });

      app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        // if (req.user) {
        //   res.render("search");
        // }
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

    app.get("/search", function(req, res) {
            res.render("search")
      });

};


// app.get("/search", function(req, res) {
//   res.render("search")
// });

