const API_KEY = 'f57501ed4b8de357a86785567795385a'; 
const CITY_NAME = 'Lagos'; // 


// Navigation and Footer Utilities
document.getElementById('menu-button')?.addEventListener('click', () => {
    document.getElementById('primary-nav').classList.toggle('show');
});

function updateFooter() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
}

// Weather Functionality
async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}&units=imperial`);
        const data = await response.json();
        displayCurrentWeather(data.list[0]);
        displayForecast(data.list);
    } catch (error) {
        console.error('Weather fetch error:', error);
        document.getElementById('weather-container').innerHTML = 'Weather data unavailable';
    }
}

function displayCurrentWeather(weatherData) {
    const tempElement = document.getElementById('current-temp');
    const descElement = document.getElementById('weather-description');
    const iconElement = document.getElementById('weather-icon');

    tempElement.textContent = `${Math.round(weatherData.main.temp)}°F`;
    descElement.textContent = weatherData.weather[0].description;
    iconElement.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
}

function displayForecast(forecastList) {
    const forecastGrid = document.getElementById('forecast-grid');
    const dailyForecasts = {};

    forecastList.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        if (!dailyForecasts[day]) {
            dailyForecasts[day] = {
                temps: [],
                icon: forecast.weather[0].icon
            };
        }
        dailyForecasts[day].temps.push(forecast.main.temp);
    });

    forecastGrid.innerHTML = Object.entries(dailyForecasts)
        .map(([day, data]) => `
            <div class="forecast-day">
                <p>${day}</p>
                <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png" alt="Forecast Icon">
                <p>${Math.round(Math.min(...data.temps))}°F - ${Math.round(Math.max(...data.temps))}°F</p>
            </div>
        `).join('');
}

// Spotlight Functionality
async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        const goldSilverMembers = data.members.filter(m => m.membershipLevel >= 2);
        
        // Randomly select 2-3 spotlights
        const spotlights = goldSilverMembers
            .sort(() => 0.5 - Math.random())
            .slice(0, Math.floor(Math.random() * 2) + 2);

        displaySpotlights(spotlights);
    } catch (error) {
        console.error('Spotlight loading error:', error);
    }
}

function displaySpotlights(spotlights) {
    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = spotlights.map(member => `
        <div class="spotlight-card">
            <img src="${member.image}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership: ${member.membershipLevel === 3 ? 'Gold' : 'Silver'}</p>
        </div>
    `).join('');
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
    fetchWeather();
    loadSpotlights();
});