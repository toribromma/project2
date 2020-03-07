$(document).ready(function () {

    var firstName = $("input#firstName");
    var lastName = $("input#lastName");
    var email = $("input#profileEmail");
    var phone = $("input#phone");

    $("#profileSave").on("click", function (event) {
        event.preventDefault();
        var profileData = {
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            phone: phone.val(),
            email: email.val()
        };
        saveProfile(profileData.firstName, profileData.lastName, profileData.email, profileData.phone);
        firstName.val("");
        lastName.val("");
        email.val("");
        phone.val("");
    });


    function saveProfile(firstName, lastName, email, phone) {
        $.ajax({
            method: "POST",
            url: "/api/profile",
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone
            }
        })
            .then(function () {
                window.location.href = "/search";
            })
    }
});



