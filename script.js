document.addEventListener("DOMContentLoaded", function() {
  // for the side bar
  const sec = document.getElementById("sec");
  const navBar = document.getElementById("navbar");
  const navSlideSwitch = document.getElementById("navbutton");
  const main = document.querySelector("main");
  const navItems = document.querySelectorAll(".navitem");
  const header = document.querySelector("header");
  // function to toggle side bar
  function togglenavbar() {
    sec.classList.toggle("active");
    navBar.classList.toggle("active");
    main.classList.toggle("active");
    header.classList.toggle("active");
  }

  // tracks the side bar toggle
  navSlideSwitch.addEventListener("click", togglenavbar);

  // for the navigation buttons
  navItems.forEach((element) => {
    element.addEventListener("click", togglenavbar);
  });

  // For animate on scroll
  const observer = new IntersectionObserver((component) => {
    component.forEach((part) => {
      if (part.isIntersecting) {
        part.target.classList.add("show");
        part.target.classList.remove("hidden");
      } else {
        part.target.classList.remove("show");
        part.target.classList.add("hidden");
      }
    });
  });

  const aosElements = document.querySelectorAll(".aos");
  aosElements.forEach((element) =>
    observer.observe(element));

  // staggering of aos

  // const hidingObserver = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     entry.target.classList.toggle('show', entry.isIntersecting);
  //   });
  // });

  const hiddenElements = document.querySelectorAll(".stagger");
  hiddenElements.forEach(((element, i) => {
    element.style.transitionDelay = ((i * 100) + 400) + "ms";
    observer.observe(element);
  }));

  // const shownElements = document.querySelectorAll(".show");
  // shownElements.forEach(((element, i) => {
  //   element.style.transitionDelay = i * 0 + "ms";
  //   observer.observe(element);
  // }));
});
