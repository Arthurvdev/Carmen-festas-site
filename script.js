let controle = 0

function menuShow(){

    if (controle==0){
        document.querySelector('.mobile-bar').style.left = "0"
        controle = 1
    }

    else{
        document.querySelector('.mobile-bar').style.left = "-100%"
        controle = 0
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slideshow-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
}

let autoSlide = setInterval(() => {
    plusSlides(1);
  }, 4000);



