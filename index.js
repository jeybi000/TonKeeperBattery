document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight / 5 * 4;

            if (sectionTop < triggerPoint) {
                section.classList.add('reveal');
            } else {
                section.classList.remove('reveal');
            }
        });
    };

    window.addEventListener('scroll', revealSection);
    revealSection();
});
