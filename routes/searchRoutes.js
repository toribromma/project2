require("dotenv").config();
var db = require("../models");
var passport = require("../config/passport");
var axios = require("axios");

module.exports = function (app) {
    app.get("/api/search", function (req, res) {
        axios.get("https://mashvisor-api.p.rapidapi.com/city/properties/GA/Atlanta", {
            // "async": true,
            // "crossDomain": true,
            // "url": "https://mashvisor-api.p.rapidapi.com/city/properties/GA/Atlanta",
            // "method": "GET",
            "headers": {
                "x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
                "x-rapidapi-key": process.env.API_KEY
            }
        }).then(function (result) {
            res.json(result.data.content.properties);
            console.log(result.data.content.properties[0]);
        })

    });
}






/*
event.preventDefault();
        console.log("Search button was clicked!")
        // Need to set up the api call with the api key in the header. Not sure how yet. Here is where I left off. The URL that is not commented is a placeholder. It works. The one below that IS commented out is the one we want to use.
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://mashvisor-api.p.rapidapi.com/city/properties/GA/Atlanta",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
                "x-rapidapi-key": "c6608f007amsh63d70b201c30d34p12279cjsn2ae84034d585"
            }
        }
*/