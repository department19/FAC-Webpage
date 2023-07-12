document.addEventListener("DOMContentLoaded", function() {
  // for the side bar
  const sec = document.getElementById("sec");
  const navBar = document.getElementById("navbar");
  const navSlideSwitch = document.getElementById("navbutton");
  const main = document.querySelector("main");
  const navItems = document.querySelectorAll(".navitem");
  // function to toggle side bar
  function togglenavbar() {
    sec.classList.toggle("active");
    navBar.classList.toggle("active");
    main.classList.toggle("active");
  }

  // tracks the side bar toggle
  navSlideSwitch.addEventListener("click", togglenavbar);

  // for the navigation buttons
  navItems.forEach((element) => {
    element.addEventListener("click", togglenavbar);
  });
});
