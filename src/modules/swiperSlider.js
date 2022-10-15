const swiper = new Swiper(".services-elements", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        }
    }
  });