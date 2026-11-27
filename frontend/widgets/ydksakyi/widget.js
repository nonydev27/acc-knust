const sessions = [
	{
		sessionName: 'Frontend Lab: UI Components & State',
		meta: 'Saturday | 2:00 PM GMT | KNUST',
		target: '2026-11-28T14:00:00Z',
	},
	{
		sessionName: 'Git & Pull Request Clinic',
		meta: 'Wednesday | 5:00 PM GMT | Online / Lab',
		target: '2026-12-02T17:00:00Z',
	},
	{
		sessionName: 'ACC KNUST Frontend Showcase',
		meta: 'Saturday | 3:00 PM GMT | Main Hall',
		target: '2026-12-05T15:00:00Z',
	},
];

let activeIndex = 0;
const widgetEl = document.querySelector('.widget');
const themeToggleButton = document.getElementById('themeToggle');
const tabButtons = document.querySelectorAll('.session-tab');
const sessionNameEl = document.getElementById('sessionName');
const sessionMetaEl = document.getElementById('sessionMeta');
const statusTextEl = document.getElementById('statusText');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secsEl = document.getElementById('seconds');

function pad(num) {
	return String(Math.max(0, num)).padStart(2, '0');
}

function renderSessionDetails() {
	const current = sessions[activeIndex];
	sessionNameEl.textContent = current.name;
	sessionMetaEl.textContent = current.meta;
}

function updateCountdown() {
	const current = sessions[activeIndex];
	const diff = new Date(current.target).getTime() - Date.now();
	if (diff <= 0) {
		daysEl.textContent = '00';
		hoursEl.textContent = '00';
		minsEl.textContent = '00';
		secsEl.textContent = '00';
		statusTextEl.textContent = 'Session started or has passed!';
	}
	const totalSecs = Math.floor(diff / 1000);
	const days = Math.floor(totalSecs / 86400);
	const hours = Math.floor((totalSecs & 86400) / 3600);
	const minutes = Math.floor((totalSecs % 3600) / 60);
	const seconds = totalSecs % 60;

	daysEl.textContent = pad(days);
	hoursEl.textContent = pad(hours);
	minsEl.textContent = pad(minutes);
	secsEl.textContent = pad(seconds);
	statusTextEl.textContent = 'Live countdown in GMT';
}

themeToggleButton.addEventListener('click', () => {
	const isDark = widgetEl.getAttribute('data-theme') === 'dark';
	const nextTheme = isDark ? 'light' : 'dark';
	widgetEl.setAttribute('data-theme', nextTheme);
	themeToggleButton.textContent =
		nextTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});

tabButtons.forEach((button) => {
	button.addEventListener('click', () => {
		activeIndex = Number(button.dataset.session);
		tabButtons.forEach((b) => b.classList.remove('is-active'));
		button.classList.add('is-active');
		renderSessionDetails();
		updateCountdown();
	});
});

renderSessionDetails();
updateCountdown();
setInterval(updateCountdown, 1000);
