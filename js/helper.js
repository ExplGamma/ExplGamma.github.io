document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    let p1 = document.getElementById("banner");
    p1.textContent = "Search for scolar articles. Currently serving " + Math.floor(Math.random() * 10000) + 1;
});