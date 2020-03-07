
$(document).ready(function () {

    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var budget = $("#budget");
    // var cities = $("#citiesInterested");
    // var email = $("#profile-email");
    var phone = $("#phone");
    $(document).on("click", "button.delete", deleteProfile);
    $("#profileSave").on("click", function (event) {
        event.preventDefault();
        $("#profileDiv").empty();
        var Profile = {
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            budget: budget.val().trim(),
            phone: phone.val().trim(), 
        };
        console.log("hi");
        console.log(Profile);

$.post("/api/profile", Profile)
        .then(function() {

            var row = $("<div>");
            row.data(Profile.id)
            row.append("<p>" + "First Name: " + Profile.firstName + "</p>");
            row.append("<p>" + "Last Name: " + Profile.lastName + "</p>");
            row.append("<p>" + "Budget: " + Profile.budget + "</p>");
            row.append("<p>" + "Phone Number: " + Profile.phone + "</p>");
            row.append("<button class='delete btn btn-danger'>x</button>")
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
            row.append("<button class='delete btn btn-danger'>x</button>")
            $("#profileDiv").prepend(row);
    }
        }
});


  // This function deletes a todo when the user clicks the delete button
  function deleteProfile(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/profile/" + id
    }).then(window.location.reload);
  }









});





