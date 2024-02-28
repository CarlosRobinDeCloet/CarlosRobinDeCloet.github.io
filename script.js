const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu-mobile");
const subNavMenu = document.querySelector(".nav-submenu-mobile");
const subNavMenuList = document.querySelector(".nav-submenu-list-mobile");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

subNavMenu.addEventListener("click", () => {
    subNavMenuList.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
    
    