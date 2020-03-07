
$(document).ready(function () {

    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var budget = $("#budget");
    // var cities = $("#citiesInterested");
    // var email = $("#profile-email");
    var phone = $("#phone");

    $("#profileSave").on("click", function (event) {
        event.preventDefault();
        var Profile = {
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            budget: budget.val().trim(),
            phone: phone.val().trim(), 
        };

        console.log(Profile);

$.post("/api/profile", Profile)
        .then(function() {

            var row = $("<div>");
            row.append("<p>" + Profile.firstName + "</p>");
            row.append("<p>" + Profile.lastName + "</p>");
            row.append("<p>" + Profile.budget + "</p>");
            row.append("<p>" + Profile.phone + "</p>");
            $("#profileDiv").prepend(row);
        });
    });

$.get("/api/profile", function(data) {

if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");

            row.append("<p>" + data[i].firstName + "</p>");
            row.append("<p>" + data[i].lastName + "</p>");
            row.append("<p>" + data[i].budget + "</p>");
            row.append("<p>" + data[i].phone + "</p>");

            $("#profileDiv").prepend(row);
    }
        }
});
});





