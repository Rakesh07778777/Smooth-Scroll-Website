

  const cursor = document.getElementById('cursorFollower');
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        // Update mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor following animation
        function animateCursor() {
            const speed = 0.15;
            
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        const interactiveHover = document.querySelectorAll('a, button, li')

        interactiveHover.forEach(e => {
            e.addEventListener('mouseenter' ,() => {e.classList.add('hover')})
            e.addEventListener('mouseleave' ,() => {e.classList.remove('hover')})
        })


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

