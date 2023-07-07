document.addEventListener("DOMContentLoaded", function() {
    // for the side bar
    const sec = document.getElementById("sec");
    const navbar = document.getElementById("navbar");
    const navbutton = document.getElementById("navbutton");
    // function to toggle side bar
    function toggle() {
        sec.classList.toggle("active"); 
        navbar.classList.toggle("active"); 
    }

    // tracks the side bar toggle
    navbutton.addEventListener("click", toggle);
});