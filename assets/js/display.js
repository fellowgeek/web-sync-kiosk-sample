// Web Sync Kiosk Display Page

const displayContainer = document.getElementById('display-container');
const numberDiv = document.getElementById('number');
const eventInfoDiv = document.getElementById('event-info');

function setDisplay(boxNumber, color, event, payload) {
    // Set background color
    displayContainer.style.background = color;
    // Set number
    numberDiv.textContent = boxNumber;
    // Set debug info
    eventInfoDiv.textContent = `Event: ${event}\nPayload: ${JSON.stringify(payload, null, 2)}`;
}

// Listen for Web Sync events
// Example event: webSync:boxTapped

document.addEventListener('webSync:boxTapped', function (event) {
    const payload = event.detail || {};
    const boxNumber = payload.boxNumber || '?';
    const color = payload.color || '#222';
    setDisplay(boxNumber, color, 'boxTapped', payload);
    console.log('Received Kiosk Event:', payload);
});

// Initial state
setDisplay('?', '#222', 'none', {});
