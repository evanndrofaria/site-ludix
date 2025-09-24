document.addEventListener("DOMContentLoaded", () => {
    
    // Configura o "vigia"
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Se o elemento entrou na tela...
            if (entry.isIntersecting) {
                // ...ele deixa de estar "escondido" e a animação do CSS acontece!
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // Para de observar este elemento para não animar de novo
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // A animação começa quando 15% do elemento estiver visível
    });

    // Diz ao "vigia" quais elementos ele deve observar
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach((element) => {
        observer.observe(element);
    });

});