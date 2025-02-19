// Load JSON data and generate cards
fetch('data/places.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.querySelector('.gallery');
    data.forEach((place, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
          <img src="${place.image}" alt="${place.name}">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
      `;
      gallery.appendChild(card);
    });
  });

// Last visit message
const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysSinceLastVisit < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else {
    visitMessage.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit === 1 ? '' : 's'} ago.`;
  }
}

// Store the current visit date
localStorage.setItem('lastVisit', currentDate);