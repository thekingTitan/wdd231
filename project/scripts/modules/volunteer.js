export function renderVolunteerOpportunities(opportunities) {
    const volunteerOpportunities = document.getElementById('volunteer-opportunities');
    if (!volunteerOpportunities) return;

    volunteerOpportunities.innerHTML = opportunities.map(opportunity => `
        <div class="opportunity-card">
            <h3>${opportunity.title}</h3>
            <p>${opportunity.description}</p>
            <div class="opportunity-details">
                <p><strong>Time Commitment:</strong> ${opportunity.timeCommitment}</p>
                <p><strong>Skill Level:</strong> ${opportunity.skillLevel}</p>
                <p><strong>Contact:</strong> ${opportunity.contactPerson}</p>
            </div>
        </div>
    `).join('');
}

export function setupVolunteerModal() {
    const volunteerModalBtn = document.getElementById('volunteer-modal-btn');
    const volunteerModal = document.getElementById('volunteer-modal');
    const closeModal = document.querySelector('.close-modal');

    if (volunteerModalBtn && volunteerModal) {
        volunteerModalBtn.addEventListener('click', () => {
            volunteerModal.style.display = 'block';
        });

        closeModal.addEventListener('click', () => {
            volunteerModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === volunteerModal) {
                volunteerModal.style.display = 'none';
            }
        });
    }
}