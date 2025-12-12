// Web Sync Kiosk Device Page

const boxes = [
    { number: 1, color: 'red' },
    { number: 2, color: 'blue' },
    { number: 3, color: 'green' },
    { number: 4, color: 'yellow' }
];

function sendBoxTapped(box) {
    const payload = {
        boxNumber: box.number,
        color: box.color,
        timestamp: Date.now()
    };
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.webSync) {
        window.webkit.messageHandlers.webSync.postMessage({
            event: 'boxTapped',
            payload
        });
    } else {
        alert('Native WebSync handler not available.\nEvent: boxTapped\nPayload: ' + JSON.stringify(payload));
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('device-container');
    boxes.forEach(box => {
        const div = document.createElement('div');
        div.className = `device-box ${box.color}`;
        div.textContent = box.number;
        div.onclick = () => sendBoxTapped(box);
        container.appendChild(div);
    });
});
