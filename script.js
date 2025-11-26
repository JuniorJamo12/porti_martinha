// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Enviar formulário (simulação)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const success = document.getElementById('success-message');
  success.style.display = 'block';
  
  setTimeout(() => {
    success.style.display = 'none';
    this.reset();
  }, 3000);
});
 
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });  
    // Fecha menu mobile
    navLinks.classList.remove('active');
  });
});

AOS.init({ duration: 1000, once: true });