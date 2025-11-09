/* Este script controla o menu "hambúrguer" no celular.
  Ele adiciona um ouvinte de evento ao botão .mobile-nav-toggle.
  Quando clicado, ele alterna a classe 'nav-active' no <header>,
  o que faz o menu aparecer ou desaparecer (definido no CSS).
*/
document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const header = document.querySelector('header');

    if (mobileNavToggle && header) {
        mobileNavToggle.addEventListener('click', () => {
            header.classList.toggle('nav-active');
            
            // Atualiza o atributo aria-expanded para acessibilidade
            const isExpanded = header.classList.contains('nav-active');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
});