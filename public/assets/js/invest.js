$(document).ready(function () {
    $(".carousel").carousel();
    autoplay();
    // Function to autoplay carousel when the page loads
    function autoplay() {
        $(".carousel").carousel("next");
        // Set the time between the cards changing to 10.5 seconds
        setTimeout(autoplay, 10000);
    }
});