// directory.js
const directoryDiv = document.getElementById('directory');
const gridButton = document.getElementById('grid-btn');
const listButton = document.getElementById('list-btn');
const menuButton = document.getElementById('menu-button');
const primaryNav = document.getElementById('primary-nav');

menuButton.addEventListener('click', () => {
    primaryNav.classList.toggle('show');
});

gridButton.addEventListener('click', () => {
    directoryDiv.className = 'grid';
});

listButton.addEventListener('click', () => {
    directoryDiv.className = 'list';
});

async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error loading members:', error);
        directoryDiv.innerHTML = 'Error loading member data. Please try again later.';
    }
}

function displayMembers(members) {
    const memberCards = members.map(member => `
        <article class="member-card">
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Website</a></p>
                <p class="membership-level">Membership: ${getMembershipLevel(member.membershipLevel)}</p>
            </div>
        </article>
    `).join('');
    
    directoryDiv.innerHTML = memberCards;
}

function getMembershipLevel(level) {
    const levels = {
        1: 'Member',
        2: 'Silver',
        3: 'Gold'
    };
    return levels[level] || 'Member';
}

function updateFooter() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
}

document.addEventListener('DOMContentLoaded', () => {
    loadMembers();
    updateFooter();
});