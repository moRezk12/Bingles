/*=============== Team Swiper ===================*/
var testimonial_swiper = new Swiper(".testimonials-swiper", {
    slidesPerView: "auto",
    centerslides: true,
    spaceBetween: 32,
    loop: true,
  }); 

  /*============= Show Menu ====================*/
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  if(navToggle)
  {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    } )
  }


  if(navClose)
  {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    } )
  }