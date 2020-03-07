var db = require("../models");
var Profile = require("../models/profile.js");

module.exports = function(app) {

  // Get all chirps
  app.get("/api/profile", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.Profile.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

    app.post("/api/profile", function(req, res) {

        console.log("Profile Data:");
        console.log(req.body);
    
        db.Profile.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          budget: req.body.budget,
          phone: req.body.phone
        }).then(function(results) {
          // `results` here would be the newly created chirp
          res.end();
        });
      });

      


}