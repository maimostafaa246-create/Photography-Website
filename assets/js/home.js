const counters = document.querySelectorAll(".counter-number");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            let current = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);

                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();

            observer.unobserve(counter);
        }
    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    observer.observe(counter);
});