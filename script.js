function updateTime() {
    const now = new Date();
    document.getElementById('time').innerText = now.toLocaleTimeString();
}

function updateSurfData() {
    const waveIntervals = [5, 6, 7, 8]; // minutes
    const tides = ['High (Falling)', 'Low (Rising)'];
    const wetsuits = ['3/2mm Full Suit', '4/3mm Full Suit', 'Spring Suit'];
    const ripCurrents = ['None', 'Moderate', 'Strong'];
    const sharks = ['No Activity', 'Warning Issued', 'Beach Closed'];

    document.getElementById('wave-interval').innerText = 
        `Wave Interval: ${waveIntervals[Math.floor(Math.random() * waveIntervals.length)]} min`;

    document.getElementById('tide-info').innerText = 
        `Tide: ${tides[Math.floor(Math.random() * tides.length)]}`;

    document.getElementById('rip-current').innerText = 
        `Rip Current Warning: ${ripCurrents[Math.floor(Math.random() * ripCurrents.length)]}`;

    document.getElementById('shark-warning').innerText = 
        `Shark Warnings: ${sharks[Math.floor(Math.random() * sharks.length)]}`;

    document.getElementById('wetsuit-recommendation').innerText = 
        `Wetsuit: ${wetsuits[Math.floor(Math.random() * wetsuits.length)]}`;
}

function updateSunset() {
    const now = new Date();
    const sunset = new Date();
    sunset.setHours(19, 45, 0, 0); // 7:45 PM sunset

    const diff = sunset - now;
    const minutesLeft = Math.floor(diff / 60000);

    if (minutesLeft > 0) {
        document.getElementById('sunset-timer').innerText = `Time to Sunset: ${minutesLeft} min`;
    } else {
        document.getElementById('sunset-timer').innerText = `Sunset has passed`;
    }
}

function toggleTraining() {
    const trainingDiv = document.getElementById('training-mode');
    if (trainingDiv.style.display === 'none') {
        trainingDiv.style.display = 'block';
    } else {
        trainingDiv.style.display = 'none';
    }
}

setInterval(updateTime, 1000);
setInterval(updateSurfData, 60000); // every 60 seconds
setInterval(updateSunset, 60000); // every 60 seconds

updateTime();
updateSurfData();
updateSunset();
