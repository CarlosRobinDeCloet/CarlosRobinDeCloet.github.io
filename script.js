const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu-mobile");
const subNavMenu1 = document.getElementById("nav-submenu-mobile1");
const subNavMenu2 = document.getElementById("nav-submenu-mobile2");
const subNavMenu3 = document.getElementById("nav-submenu-mobile3");
const subNavMenu4 = document.getElementById("nav-submenu-mobile4");
const subNavMenuList1 = document.getElementById("nav-submenu-list-mobile1");
const subNavMenuList2 = document.getElementById("nav-submenu-list-mobile2");
const subNavMenuList3 = document.getElementById("nav-submenu-list-mobile3");
const subNavMenuList4 = document.getElementById("nav-submenu-list-mobile4");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

subNavMenu1.addEventListener("click", () => {
    subNavMenuList1.classList.toggle("active");
})

subNavMenu2.addEventListener("click", () => {
    subNavMenuList2.classList.toggle("active");
})

subNavMenu3.addEventListener("click", () => {
    subNavMenuList3.classList.toggle("active");
})

subNavMenu4.addEventListener("click", () => {
    subNavMenuList4.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

var lastScrollTop; // This Varibale will store the top position

navbar = document.getElementById('navbar'); // Get The NavBar

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > 480){ //if it will be greater than the previous
    navbar.style.top='-800px';
    //set the value to the negetive of height of navbar 
  }
  
  else{
    navbar.style.top='0';
  }
  
  lastScrollTop = scrollTop; //New Position Stored
});


    