  gsap.registerPlugin(ScrollTrigger);

        // Cursor Animation
        const cursor = document.getElementById('cursorFollower');
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            const speed = 0.15;
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }

        animateCursor();


        const interactiveElements = document.querySelectorAll('a, .project-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        // Hero Animations
        gsap.to('.hero-label', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3
        });

        gsap.from('.hero-title .line span', {
            y: 200,
            duration: 1.2,
            ease: 'power4.out',
            stagger: 0.1,
            delay: 0.5
        });

        gsap.to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1.2
        });

        gsap.to('.cta-button', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1.4
        });



        // Section Title Reveals
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title.querySelectorAll('.word span'), {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                }
            });
        });

        // Project Cards Animation
        gsap.utils.toArray('.project-card').forEach((card, index) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
                delay: index * 0.1
            });
        });



        // Service Cards Animation
        gsap.utils.toArray('.service-card').forEach((card, index) => {
            gsap.to(card, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
                delay: index * 0.15
            });
        });

        // About Section Word Reveal
        gsap.from('.about-content .word span', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.03,
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 70%',
            }
        });




        // Footer Animations
        gsap.to('.footer-title', {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 80%',
            }
        });

        gsap.to('.footer-links', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 80%',
            },
            delay: 0.3
        });

        gsap.to('.copyright', {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 80%',
            },
            delay: 0.8
        });




        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });