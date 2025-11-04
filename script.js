

gsap.from('.items h1' , {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3
})




const swiper = new Swiper('.swiper', {
     spaceBetween: 30,
      hashNavigation: {
        watchState: true,
      },    

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
        // mousewheel: true,
      keyboard: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

