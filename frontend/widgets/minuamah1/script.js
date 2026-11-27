// 1. The date and time of the session we're counting down to
const sessionDate = new Date("2026-12-05T16:00:00Z");

// 2. A function that works out how much time is left
function getTimeLeft() {
  const now = new Date();
  const difference = sessionDate - now; // milliseconds left

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds, difference };
}

// 3. Grab the slots on the page using their ids
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("message");

// 4. Turn 5 into "05" so the clock always shows two digits
function pad(number) {
  return String(number).padStart(2, "0");
}

// 5. Write the time left onto the page
function updateCountdown() {
  const { days, hours, minutes, seconds, difference } = getTimeLeft();

  // If the session time has passed, stop and show a message
  if (difference <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    messageEl.textContent = "The session has started!";
    clearInterval(timerId);
    return;
  }

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

// 6. Run it once straight away, then repeat every 1000 ms (1 second)
updateCountdown();
const timerId = setInterval(updateCountdown, 1000);