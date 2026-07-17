const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

menuToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Please complete all fields before sending.';
    formStatus.style.color = '#b91c1c';
    return;
  }

  formStatus.textContent = `Thanks, ${name}! Your message has been received.`;
  formStatus.style.color = '#047857';
  contactForm.reset();
});
