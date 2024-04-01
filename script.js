document.addEventListener("DOMContentLoaded", function() {
    let parallaxSections = document.querySelectorAll('.parallax-section');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        parallaxSections.forEach(function(section) {
            let scrollSpeed = section.classList.contains('section1') ? 0.5 : 1; // Ajustar la velocidad para cada sección
            let offset = section.offsetTop - scrollTop;
            let translateY = offset * scrollSpeed;
            section.style.transform = 'translateY(' + translateY + 'px)';
        });
    });
});
