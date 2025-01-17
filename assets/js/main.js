const navClose = document.getElementById("close-btn"), navToggle = document.getElementById("nav-toggle"), navMenu = document.getElementById("nav-menu");
navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("active");
});

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navToggle.classList.add("active");
});