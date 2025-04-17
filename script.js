const navbarToggle = document.getElementById('navbarToggle');

navbarToggle.addEventListener('click', function () {
    navbarToggle.classList.toggle('collapsed');
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).toggle();
        }
    });
});
