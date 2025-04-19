document.addEventListener('DOMContentLoaded', function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // A classe 'collapse' do Bootstrap pode ser manipulada para abrir e fechar o menu
    navbarToggler.addEventListener('click', function() {
        // Alterna entre abrir e fechar a navbar usando o toggle() do Bootstrap
        const collapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true
        });
    });

    // Fechar a navbar ao clicar em qualquer link da navbar
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const collapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            collapse.hide();  // Fecha o menu ao clicar no link
        });
    });
});
