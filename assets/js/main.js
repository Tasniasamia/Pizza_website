// menu button & close button
const navClose = document.getElementById("close-btn"), navToggle = document.getElementById("nav-toggle"), navMenu = document.getElementById("nav-menu");
navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("active");
});

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navToggle.classList.add("active");
});

//=============== Shadow HEADER ===============
const scrollHeader=()=>{
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("scroll-header") : header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);



const sections = document.querySelectorAll('section[id]');

// const scrollActive = () => {
//   const scrollDown = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute('id'),
//       sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

//     if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
//       sectionsClass.classList.add('active-link');
//     } else {
//       sectionsClass.classList.remove('active-link');
//     }
//   });
// };
// window.addEventListener('scroll', scrollActive);

const scrollup = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollup);