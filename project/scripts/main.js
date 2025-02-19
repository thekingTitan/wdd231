import { loadGardenData } from './modules/data-loader.js';
import { displayAnnouncement } from './modules/announcements.js';
import { renderGardenStats } from './modules/garden-stats.js';
import { renderEvents } from './modules/events.js';
import { renderVolunteerOpportunities, setupVolunteerModal } from './modules/volunteer.js';
import { renderSeasonalTips } from './modules/seasonal-tips.js';
import { setupModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Load garden data
    const data = await loadGardenData();

    // Display the announcement banner
    displayAnnouncement(data.announcements);

    // Render garden stats
    renderGardenStats(data.gardenStats);

    // Render upcoming events
    renderEvents(data.upcomingEvents);

    // Render volunteer opportunities
    renderVolunteerOpportunities(data.volunteerOpportunities);

    // Render seasonal tips
    renderSeasonalTips(data.seasonalTips);

    // Set up the volunteer modal
    setupVolunteerModal();

    // Set up other modals (if any)
    setupModal();
});