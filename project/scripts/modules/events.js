export function renderEvents(events) {
    const eventsContainer = document.getElementById('events-list');
    if (!eventsContainer) return;

    eventsContainer.innerHTML = events.map(event => `
        <div class="event-card">
            <div class="event-image">
                <img src="images/${event.image}" alt="${event.title}">
            </div>
            <div class="event-details">
                <div class="event-date">${new Date(event.date).toLocaleDateString()}</div>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-location">
                    <span>📍</span> ${event.location}
                </div>
                <p class="event-description">${event.description}</p>
            </div>
        </div>
    `).join('');
}