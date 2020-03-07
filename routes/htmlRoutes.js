// Dependencies
// =============================================================
// Importing the model (index.js) to use it's database functions
var index = require("../models/index.js");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    // "practice" route loads "login.handlebars" page. Right now it shows the Cats! page (as a placeholder) but that's just a practice route to be deleted once the REAL login page is created.
    app.get("/", function(req, res) {
            res.render("index")
      });

      app.get("/login", function(req, res) {
        // If the user already has an account send them to the search page
        if (req.user) {
          res.redirect("search");
        }
        res.render("logIn");
      });

    // signup route loads login page.
    app.get("/signup", function (req, res) {
        if (req.user) {
            res.redirect("search");
          }
          res.render("signUp")
        });

     // signup route loads login page.
     app.get("/profile", isAuthenticated, function (req, res) {
        res.render("profile");
    });

    app.get("/investment", isAuthenticated,  function (req, res) {
        res.render("investment");
    });

    app.get("/properties", isAuthenticated,  function (req, res) {
        res.render("properties");
    });

    app.get("/search", isAuthenticated,  function(req, res) {
            res.render("search")
      });

};




