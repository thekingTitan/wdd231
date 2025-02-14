// Set timestamp on form load
document.getElementById('timestamp').value = new Date().toISOString();

// Modal functionality
const modals = document.querySelectorAll('.modal');
const modalLinks = document.querySelectorAll('.modal-link');
const closeButtons = document.querySelectorAll('.close');

modalLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    modals[index].style.display = 'block';
  });
});

closeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modals[index].style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});