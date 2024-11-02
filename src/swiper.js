var swiper = new Swiper(".swiper-mobile", {
  effect: "cards",
  grabCursor: true,
  centerSlides: true,
});

swiper.changeDirection(('vertical'))


var swiper = new Swiper(".swiper-desktop", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex)
    },
  },
  pagination: {
    el: "swiper-pagination",
  }
});