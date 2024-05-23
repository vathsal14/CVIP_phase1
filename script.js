document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".toggler");
    const navLinks = document.querySelector(".nav-links");

    toggler.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
    });
});
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((item) => {
      item.classList.remove('nav-item-active');
    });
    item.classList.add('nav-item-active');
  });
});