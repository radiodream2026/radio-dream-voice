// script.js

// Player controls
let playButton = document.getElementById('play');
let pauseButton = document.getElementById('pause');
let stopButton = document.getElementById('stop');

// Now playing information
let nowPlaying = document.getElementById('now-playing');

// Function to update now playing info
function updateNowPlaying(info) {
    nowPlaying.textContent = `Now Playing: ${info}`;
}

// Event listeners for interactive features
playButton.addEventListener('click', function() {
    console.log('Playing stream...');
    // Logic to play the stream
});

pauseButton.addEventListener('click', function() {
    console.log('Pausing stream...');
    // Logic to pause the stream
});

stopButton.addEventListener('click', function() {
    console.log('Stopping stream...');
    // Logic to stop the stream
});

// API integration for stream data management
async function fetchStreamData() {
    try {
        let response = await fetch('https://api.streamdata.com'); // Example API endpoint
        let data = await response.json();
        updateNowPlaying(data.currentTrack);
    } catch (error) {
        console.error('Error fetching stream data:', error);
    }
}

// Initial data fetch
fetchStreamData();