// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
    });
});

// Header scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = darkModeToggle.querySelector('i');

function setDarkMode(on) {
    document.body.classList.toggle('dark-mode', on);
    darkModeIcon.classList.toggle('fa-moon', !on);
    darkModeIcon.classList.toggle('fa-sun', on);
    localStorage.setItem('darkMode', on ? 'on' : 'off');
}

// Carregar preferência do usuário
if (localStorage.getItem('darkMode') === 'on') {
    setDarkMode(true);
}

darkModeToggle.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark-mode'));
});

// Ajusta a largura da barra de skill conforme a porcentagem do texto
document.querySelectorAll('.skill-item').forEach(item => {
    const levelSpan = item.querySelector('.skill-level');
    const progressBar = item.querySelector('.skill-progress');
    if (levelSpan && progressBar) {
        const percent = levelSpan.textContent.replace('%', '').trim();
        progressBar.style.width = percent + '%';
    }
});
