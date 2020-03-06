$(document).ready(function () {

    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var budget = $("#budget");
    var cities = $("#citiesInterested");
    var email = $("#profile-email");
    var phone = $("#phone");

    $("#profileSave").on("click", function (event) {
        event.preventDefault();
        var userData = {
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            budget: budget.val().trim(),
            citiesInterested: cities.val().trim(),
            phone: phone.val().trim(),
            email: email.val().trim()
        };
    });

};



}