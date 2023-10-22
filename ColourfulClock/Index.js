function updateDigitalClock() {
    const digitalHours = document.getElementById('digital-hours');
    const digitalMinutes = document.getElementById('digital-minutes');
    const digitalSeconds = document.getElementById('digital-seconds');

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    digitalHours.textContent = hours;
    digitalMinutes.textContent = minutes;
    digitalSeconds.textContent = seconds;
}

function rotateClockHands() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteDeg = (360 / 60) * minutes;
    const secondDeg = (360 / 60) * seconds;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(rotateClockHands, 1000); // Update clock hands every second
setInterval(updateDigitalClock, 1000); // Update digital clock every second
rotateClockHands(); // Initial call
updateDigitalClock(); // Initial call
