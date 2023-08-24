const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll("nav-link").forEach((navLink) =>
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex +=n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "";
  dots[slideIndex - 1].className += " active";
}

const carousel = document.querySelector(".slideshow-container");
let touchStartX = 0;

carousel.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const touchDiff = touchStartX - touchEndX;

  if (touchDiff > 50) {
    plusSlides(1); 
  } else if (touchDiff < -50) {
    plusSlides(-1); 
  }
});

// UP Button
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function reveal() {
 let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
   let windowHeight = window.innerHeight;
   let elementTop = reveals[i].getBoundingClientRect().top;
   let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

