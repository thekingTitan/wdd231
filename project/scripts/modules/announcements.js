export function displayAnnouncement(announcements) {
    const announcementBanner = document.getElementById('announcement-banner');
    if (!announcementBanner) return;

    // Find the highest priority announcement
    const highPriorityAnnouncements = announcements.filter(a => a.priority === 'high');
    if (highPriorityAnnouncements.length > 0) {
        const announcement = highPriorityAnnouncements[0];
        announcementBanner.innerHTML = `
            <h3>${announcement.title}</h3>
            <p>${announcement.description}</p>
        `;
        announcementBanner.style.display = 'block';
    } else {
        announcementBanner.style.display = 'none';
    }
}