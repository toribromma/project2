$(document).ready(function () {

    var cityInput = $("city");
    var stateInput = $("state");
    var listingContainer = $(".listings-container");
    var listings;

    // Variable to be called to add/change map elements that points to the map div
    var map = L.map('map');
    // Function to load map tiles
    L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
        attribution:
            '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // When user clicks Search button this will take the City & State to run API call.
    $(document).on("click", "#searchBtn", getListings);

    function getListings(event) {
        event.preventDefault();
        console.log("Search button was clicked!");
        $(".map").removeClass("hide");
        // Need to set up the api call with the api key in the header. Not sure how yet. Here is where I left off. The URL that is not commented is a placeholder. It works. The one below that IS commented out is the one we want to use.
        $.get("/api/search", "any", function (data) {
            console.log(data)
            listings = data;
            if (!listings || !listings.length) {
                displayEmpty();
            }
            else {
                initializeListings();
            }
        });
    };

    function initializeListings() {
        listingContainer.empty();
        var listingsToAdd = [];
        for (var i = 0; i < listings.length; i++) {
            listingsToAdd.push(createNewRow(listings[i]));
        }
        listingContainer.append(listingsToAdd);
    };

    function createNewRow(property) {
        var newListCard = $("<div>");
        newListCard.addClass("card");
        newListCard.css({ width: "450px" });
        var newDivider = $("<div>");
        newDivider.addClass("card-divider");
        var newCardHeader = $("<h4>");
        newCardHeader.text(property.address);
        var newListImg = $("<img>");
        newListImg.attr("src", property.image);
        newListImg.addClass("results-img");
        var newListDetailsContainer = $("<div>");
        newListDetailsContainer.addClass("grid-x");
        newListDetailsContainer.addClass("grid-padding-x");
        var newListDetailsBeds = $("<div>");
        newListDetailsBeds.addClass("medium-4");
        newListDetailsBeds.addClass("cell");
        newListDetailsBeds.text(property.beds + " beds");
        var newListDetailsBath = $("<div>");
        newListDetailsBath.addClass("medium-4");
        newListDetailsBath.addClass("cell");
        newListDetailsBath.text(property.baths + " bath(s)");
        var newListDetailsSize = $("<div>");
        newListDetailsSize.addClass("medium-4");
        newListDetailsSize.addClass("cell");
        newListDetailsSize.text(property.sqft + " sq.ft");
        var newListCocContainer = $("<div>");
        newListCocContainer.addClass("grid-x");
        newListCocContainer.addClass("grid-padding-x");
        var newListCoc = $("<div>");
        newListCoc.addClass("medium-4");
        newListCoc.addClass("cell");
        newListCoc.text("CASH ON CASH");
        var newListCocAirbnb = $("<div>");
        newListCocAirbnb.addClass("medium-4");
        newListCocAirbnb.addClass("cell");
        newListCocAirbnb.text("Airbnb " + property.COC.airbnb + "%");
        var newListCocTraditional = $("<div>");
        newListCocTraditional.addClass("medium-4");
        newListCocTraditional.addClass("cell");
        newListCocTraditional.text("Traditional " + property.COC.traditional + "%");
        var newListCapContainer = $("<div>");
        newListCapContainer.addClass("grid-x");
        newListCapContainer.addClass("grid-padding-x");
        var newListCap = $("<div>");
        newListCap.addClass("medium-4");
        newListCap.addClass("cell");
        newListCap.text("CAP RATE");
        var newListCapAirbnb = $("<div>");
        newListCapAirbnb.addClass("medium-4");
        newListCapAirbnb.addClass("cell");
        newListCapAirbnb.text("Airbnb " + property.cap_rate.airbnb + "%");
        var newListCapTraditional = $("<div>");
        newListCapTraditional.addClass("medium-4");
        newListCapTraditional.addClass("cell");
        newListCapTraditional.text("Traditional " + property.cap_rate.traditional + "%");
        var lineSpace1 = $("<br>");
        var lineSpace2 = $("<br>");

        newListCard.append(newCardHeader);
        newListCard.append(newListImg);
        newListCard.append(newListDetailsContainer);
        newListDetailsContainer.append(newListDetailsBeds);
        newListDetailsContainer.append(newListDetailsBath);
        newListDetailsContainer.append(newListDetailsSize);
        newListCard.append(lineSpace1);
        newListCard.append(newListCocContainer);
        newListCocContainer.append(newListCoc);
        newListCocContainer.append(newListCocAirbnb);
        newListCocContainer.append(newListCocTraditional);
        newListCard.append(lineSpace2);
        newListCard.append(newListCapContainer);
        newListCapContainer.append(newListCap);
        newListCapContainer.append(newListCapAirbnb);
        newListCapContainer.append(newListCapTraditional);
        return newListCard;
    };
});









/*
Testing Code for getListings()
-----------------------------------------------------------------------------------
$.ajax({
            // url: "https://api.edamam.com/search?q=steak&app_id=00c46abe&app_key=2e68c484c12e4ddcf68cd4c939cef6e0&from=0&to=3&Health=paleo",
            url: "https://api.mashvisor.com/v1.1/client/city/properties/CA/Los%20Angeles",
            method: "GET",
            headers: {"x-api-key": "[0b3c70fe-d5b1-438e-8e6f-1feb2bcaf143]"}
        }).then(function (response) {
            console.log(response);
        })

        */

// // Function for handling what to render when there are no listings
// function renderEmpty() {
//     var alertDiv = $("<div>");
//     alertDiv.addClass("alert alert-danger");
//     alertDiv.text("Enter both a city and state to search for listings :)");
//     listingContainer.append(alertDiv);
// }