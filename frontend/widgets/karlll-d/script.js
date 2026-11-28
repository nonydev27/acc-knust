const sessions = {
  clinic: {
    title: "Git & Frontend Clinic",
    details: "KNUST • Saturday Session",
    day: 6, // Saturday
    hour: 16,
    minute: 0,
  },
  workshop: {
    title: "UI/UX & Dev Jam",
    details: "ACC KNUST • Evening Meetup",
    day: 3, // Wednesday
    hour: 17,
    minute: 30,
  },
};

const titleText = document.getElementById("title");
const detailsText = document.getElementById("details");
const statusText = document.getElementById("status");
const daysBox = document.getElementById("days");
const hoursBox = document.getElementById("hours");
const minutesBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");
const buttons = document.querySelectorAll(".button");

let currentSession = "clinic";

function getNextDate(day, hour, minute) {
  const now = new Date();
  const nextDate = new Date(now);
  nextDate.setHours(hour, minute, 0, 0);

  const daysAhead = (day - now.getDay() + 7) % 7;
  nextDate.setDate(now.getDate() + daysAhead);

  if (nextDate <= now) {
    nextDate.setDate(nextDate.getDate() + 7);
  }

  return nextDate;
}

function twoDigits(value) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function updateTimer() {
  const session = sessions[currentSession];
  const targetDate = getNextDate(session.day, session.hour, session.minute);
  const diff = targetDate - new Date();

  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysBox.textContent = twoDigits(days);
  hoursBox.textContent = twoDigits(hours);
  minutesBox.textContent = twoDigits(minutes);
  secondsBox.textContent = twoDigits(seconds);

  statusText.textContent =
    "Next session: " +
    targetDate.toLocaleString([], {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
}

function selectSession(name) {
  currentSession = name;
  const session = sessions[name];

  titleText.textContent = session.title;
  detailsText.textContent = session.details;

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.session === name);
  });

  updateTimer();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    selectSession(button.dataset.session);
  });
});

selectSession(currentSession);
setInterval(updateTimer, 1000);