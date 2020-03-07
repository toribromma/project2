$(document).ready(function () {
    let cityInput = $("city");
    let stateInput = $("state");
    let listingContainer = $("listings")
    // When user clicks Search button this will take the City & State to run API call.
    $(document).on("click", "#searchBtn", getListings);
    function getListings(event) {
        event.preventDefault();
        console.log("Search button was clicked!")
        // Need to set up the api call with the api key in the header. Not sure how yet. Here is where I left off. The URL that is not commented is a placeholder. It works. The one below that IS commented out is the one we want to use.
        $.get("/api/search", "any", function (data) {
            console.log(data)
        });
    }
})









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