document.addEventListener("DOMContentLoaded", function() {
    // for the side bar
    const sec = document.getElementById("sec");

    // function to toggle side bar
    function toggle() {
        sec.classList.toggle("active"); 
    }

    // tracks the side bar toggle
    sec.addEventListener("click", toggle);
});