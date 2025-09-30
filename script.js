/*
============================================================
    ARQUIVO script.js FINAL, LIMPO E UNIFICADO
============================================================
*/

// Ouve o evento que indica que todo o HTML foi carregado antes de executar qualquer script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. CÓDIGO PARA O MENU HAMBÚRGUER ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('is-active');
            menuToggle.classList.toggle('is-active');
        });

        // Fecha o menu mobile ao clicar em um link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('is-active');
                menuToggle.classList.remove('is-active');
            });
        });
    }

    // --- 2. CÓDIGO PARA ATIVAR AS ANIMAÇÕES DE ROLAGEM (AOS) ---
    AOS.init({
        duration: 800, // Duração da animação em milissegundos
        once: true,    // Animação acontece apenas uma vez
    });

    // --- 3. CÓDIGO PARA O HEADER INTERATIVO ---
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            // Se o usuário rolar mais de 50 pixels para baixo...
            if (window.scrollY > 50) {
                header.classList.add('scrolled'); // ...adiciona a classe .scrolled
            } else {
                header.classList.remove('scrolled'); // ...senão, remove a classe
            }
        });
    }

});