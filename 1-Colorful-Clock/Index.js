function setInitialClockHands() {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const hourDeg = (360 / 12) * (hours + minutes / 60) + 90;
    const minuteDeg = (360 / 60) * minutes + 90;
    const secondDeg = (360 / 60) * seconds + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}


function updateClock() {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');
    const digitalTime = document.getElementById('digital-time');

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const hourDeg = (360 / 12) * (hours + minutes / 60);
    const minuteDeg = (360 / 60) * minutes;
    const secondDeg = (360 / 60) * seconds;


    hourHand.style.transform = `rotate(${hourDeg - 90}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg - 92}deg)`;
    secondHand.style.transform = `rotate(${secondDeg - 89}deg)`;

    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
    digitalTime.textContent = formattedTime;
}

setInitialClockHands();
setInterval(updateClock, 1000);