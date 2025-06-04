document.addEventListener('DOMContentLoaded', () => {
    // Starfield canvas background
    const starCanvas = document.getElementById('starfield');
    if (starCanvas) {
        const ctx = starCanvas.getContext('2d');
        let width, height;
        const stars = [];

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            starCanvas.width = width;
            starCanvas.height = height;
            stars.length = 0;
            for (let i = 0; i < 100; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 2 + 0.5,
                    velocity: Math.random() * 0.5 + 0.2
                });
            }
        };

        const update = () => {
            ctx.clearRect(0, 0, width, height);
            for (const star of stars) {
                star.y += star.velocity;
                if (star.y > height) star.y = 0;
                ctx.fillStyle = '#fff';
                ctx.fillRect(star.x, star.y, star.size, star.size);
            }
            requestAnimationFrame(update);
        };

        window.addEventListener('resize', resize);
        resize();
        update();
    }
    // 1. Page Load Animations
    const pageContentWrapper = document.querySelector('.page-content-wrapper');
    if (pageContentWrapper) {
        // Initial state for animation
        pageContentWrapper.style.opacity = '0';
        pageContentWrapper.style.transform = 'translateY(-20px)';
        pageContentWrapper.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'; // Duration changed from 0.8s to 0.6s

        // Trigger fade-in and slide-up
        setTimeout(() => {
            pageContentWrapper.style.opacity = '1';
            pageContentWrapper.style.transform = 'translateY(0)';
        }, 100); // Small delay to ensure transition applies

        // Animate headings after page wrapper is visible
        setTimeout(() => {
            const mainHeadings = document.querySelectorAll('.container header h1, .container main h1, .container header h2, .container main h2');
            mainHeadings.forEach((heading, index) => {
                heading.style.opacity = '0';
                heading.style.transform = 'translateY(20px)';
                heading.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                heading.style.transitionDelay = `${index * 0.2}s`; // Stagger animation

                setTimeout(() => {
                    heading.style.opacity = '1';
                    heading.style.transform = 'translateY(0)';
                }, 50); // Small delay for transition to register
            });
        }, 600); // Start after page wrapper animation (0.6s)
    }

    // 2. Project Card Animation on Scroll (for projects.html or /projects/)
    if (window.location.href.endsWith('projects.html') ||
        window.location.pathname.endsWith('/projects/')) {
        const articles = document.querySelectorAll('article');

        if (articles.length > 0) {
            const observerOptions = {
                root: null, // relative to document viewport
                rootMargin: '0px',
                threshold: 0.1 // 10% of item visible
            };

            const observerCallback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Animate only once
                    }
                });
            };

            const articleObserver = new IntersectionObserver(observerCallback, observerOptions);
            articles.forEach(article => {
                articleObserver.observe(article);
            });
        }
    }
});
