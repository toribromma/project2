$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();

    $("#logout").removeClass("hide")
    
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.ajax({
      method: "POST",
      url: "/api/login",
      data: {
        email: email,
      password: password
      }
    })
      .then(function() {
        window.location.href = "/search";
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  

});




/*
----------------this was on line 26 -28 before I started messing with it.---------------- 
function loginUser(emails, passwords) {
  $.put("/api/login", {
    email: emails,
    password: passwords
  })
    .then(function() {
      window.location.replace("/search");
      // If there's an error, log the error
    })
    .catch(function(err) {
      console.log(err);
    });
}
------------------------------------------------------
Console.log on web page shows $.put.then.catch is not a method
------Something I wanted to try-------------
$.ajax({
      method: "PUT",
      url: "/api/signup",
      data: {
        email: emails,
      password: passwords
      }
    })
      .then(function() {
        window.location.href = "/search";
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
------------------------------------------------------
*/