let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('#navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});



let themeTogggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
    themeTogggler.classList.toggle('active');  
  }

window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    themeTogggler.classList.remove('active'); 

});


 document.addEventListener("DOMContentLoaded", function () {
     var menuBars = document.getElementById("menu-bars");
     var navbar = document.querySelector(".navbar");

     menuBars.addEventListener("click", function () {
     navbar.classList.toggle("active");
 });
 });



document.addEventListener('DOMContentLoaded', function() {
    
    const themeButtons = document.querySelectorAll('.theme-btn');

    
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the background color of the clicked button
            const bgColor = window.getComputedStyle(button).backgroundColor;

            // Set the '--main-color' CSS variable to the button's background color
            document.documentElement.style.setProperty('--main-color', bgColor);
        });
    });
});



var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});
