document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal using Intersection Observer
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve for performance: animate only once
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // Simple Elegant Sticky Header
    const stickyHeader = document.getElementById('sticky-header');
    const heroSection = document.querySelector('.hero');
    
    if (stickyHeader && heroSection) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > heroSection.offsetHeight - 50) {
                stickyHeader.classList.add('visible');
            } else {
                stickyHeader.classList.remove('visible');
            }
        });
    }

    // We removed the laggy/flashing JS magnetic button.
    // The hover interactions are now 100% handled by highly optimized,
    // hardware-accelerated CSS to ensure an ultra-smooth, premium experience.
});
