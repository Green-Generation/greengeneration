// SCROLL SUAVE
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const destino = document.querySelector(href);
      destino?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// FADE-IN SEÇÕES
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // não reaplica
    }
  });
}, {
  threshold: 0.15,
});

document.querySelectorAll('.fade-section').forEach((section) => {
  observer.observe(section);
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      destino?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// MODO ESCURO + ÍCONE + LOCALSTORAGE
const darkModeBtn = document.getElementById('darkModeBtn');
const icon = darkModeBtn.querySelector('i');

// Aplica o tema salvo
function carregarTema() {
  const modoEscuroAtivo = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark-mode', modoEscuroAtivo);
  atualizarIcone(modoEscuroAtivo);
}

// Altera ícone do botão
function atualizarIcone(escuro) {
  icon.className = escuro ? 'fas fa-sun' : 'fas fa-moon';
}

// Alterna o tema
darkModeBtn.addEventListener('click', () => {
  const modoEscuroAtivo = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', modoEscuroAtivo);
  atualizarIcone(modoEscuroAtivo);
});
