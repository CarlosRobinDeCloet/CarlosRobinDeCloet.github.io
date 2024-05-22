<link rel="stylesheet" href="mystyle.css"></link>

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu-mobile");
const subNavMenu1 = document.getElementById("nav-submenu-mobile1");
const subNavMenu2 = document.getElementById("nav-submenu-mobile2");
const subNavMenu3 = document.getElementById("nav-submenu-mobile3");
const subNavMenu4 = document.getElementById("nav-submenu-mobile4");
const subNavMenu5 = document.getElementById("nav-submenu-mobile5");
const subNavMenuList1 = document.getElementById("nav-submenu-list-mobile1");
const subNavMenuList2 = document.getElementById("nav-submenu-list-mobile2");
const subNavMenuList3 = document.getElementById("nav-submenu-list-mobile3");
const subNavMenuList4 = document.getElementById("nav-submenu-list-mobile4");
const subNavMenuList5 = document.getElementById("nav-submenu-list-mobile5");

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

subNavMenu5.addEventListener("click", () => {
    subNavMenuList5.classList.toggle("active");
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
  
  if(lastScrollTop > 480){ //if it will be greater than the previous
    navbar.classList.add("hidden");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    //set the value to the negetive of height of navbar 
  }
  
  else{
    navbar.classList.remove("hidden");
  }
  
  lastScrollTop = scrollTop;
});

document.querySelectorAll(".carousel").forEach(carousel=> {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class='carousel__button'></span>`;
    });

    carousel.insertAdjacentHTML('beforeend', `
        <div class='carousel__nav'>
            ${ buttonsHtml.join('')}
        </div>
    `);

    const buttons = carousel.querySelectorAll('.carousel__button');

    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            items.forEach(item => item.classList.remove('carousel__item__selected'));
            buttons.forEach(button => button.classList.remove('carousel__button__selected'));

            items[i].classList.add('carousel__item__selected');
            buttons[i].classList.add('carousel__button__selected');
        });
    });

    // select first item on page load
    items[0].classList.add('carousel__item__selected');
    buttons[0].classList.add('carousel__button__selected');
});


    