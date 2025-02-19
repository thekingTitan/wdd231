export function renderGardenStats(stats) {
    const statsContainer = document.querySelector('.stats-container');
    if (!statsContainer) return;

    statsContainer.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <div class="stat-value">${stat.value}</div>
            <div class="stat-title">${stat.title}</div>
        </div>
    `).join('');
}