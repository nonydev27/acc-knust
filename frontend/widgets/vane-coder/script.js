const meetingDate = new Date("2026-12-05T16:00:00"); // change to your next meeting
const countdown = document.getElementById("countdown");

function update() {
  const diff = meetingDate - new Date();
  if (diff <= 0) {
    countdown.textContent = "Meeting time!";
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  countdown.textContent = `${d}d ${h}h ${m}m ${s}s`;
}

update();
setInterval(update, 1000);

document.getElementById("toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});