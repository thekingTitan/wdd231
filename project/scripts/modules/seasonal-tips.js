export function renderSeasonalTips(tips) {
    const tipsContainer = document.getElementById('seasonal-tips');
    if (!tipsContainer) return;

    tipsContainer.innerHTML = tips.map(tip => `
        <div class="tip-card">
            <div class="tip-image">
                <img src="images/${tip.image}" alt="${tip.title}">
            </div>
            <div class="tip-content">
                <h3>${tip.title}</h3>
                <p>${tip.description}</p>
            </div>
        </div>
    `).join('');
}