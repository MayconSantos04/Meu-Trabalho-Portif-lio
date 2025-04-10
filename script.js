// Quando o botão hambúrguer for clicado, a navbar altera o estado do "collapsed"
const navbarToggle = document.getElementById('navbarToggle');

// Garantir que o Bootstrap possa controlar a transformação do ícone
navbarToggle.addEventListener('click', function () {
    navbarToggle.classList.toggle('collapsed'); // Alterna a classe "collapsed" para o efeito do X
});