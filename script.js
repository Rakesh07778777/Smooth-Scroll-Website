
// function breakText () {
// let heading = document.querySelector('.items h1');
// let textContent = heading.textContent;

// let textSplit = textContent.split('');

// let halfValue = textSplit.length / 2;

// let clutter = '';

// textSplit.forEach((value, index) =>{
//     if (index < halfValue) {
//         clutter += `<span class = "a">${value}</span>`
//     } else{
//         clutter += `<span class = "b">${value}</span>`

//     }
//  heading.innerHTML = clutter;
// });

// }
// breakText()

// gsap.from('h1 .a', {
//     opacity: 0,
//     y: 80,
//     duration : 0.6,
//     delay: 0.5,
//     stagger: 0.15
// })
// gsap.from('h1 .b', {
//     opacity: 0,
//     y: 80,
//     duration : 0.6,
//     delay: 0.5,
//     stagger: -0.15
// })

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

