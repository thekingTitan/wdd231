import { loadGardenData } from './data-loader.js';

document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadGardenData();
    if (!data) return;

    const plotsContainer = document.getElementById('plots-list');
    if (!plotsContainer) return;

    plotsContainer.innerHTML = data.gardenStats.map(plot => `
        <div class="plot-card">
            <h3>${plot.title}</h3>
            <div class="plot-details">
                <p><strong>Available:</strong> ${plot.value}</p>
            </div>
        </div>
    `).join('');
});