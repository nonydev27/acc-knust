# ACC KNUST Session Countdown & Schedule Widget

An interactive vanilla HTML, CSS, and JavaScript widget for tracking upcoming AmaliTech Coding Club (ACC) KNUST sessions.

## Features

- **Live Countdown Timer:** Displays days, hours, minutes, and seconds until the selected upcoming club meeting.
- **Session Selector & Track Filter:** Filter sessions by `All`, `Frontend`, or `General`, and click any session to switch the active countdown.
- **Dark / Light Mode Toggle:** Switches between light and dark themes with preference saved in `localStorage`.
- **Attendance Check-In:** Toggle "Mark as Attending" per session with persisted state in `localStorage`.

## Files

- `index.html` — Semantic widget markup
- `style.css` — Responsive layout and light/dark theme variables
- `script.js` — Countdown logic, filtering, RSVP toggle, and theme persistence

## How to Run / View

1. Open `frontend/widgets/rolandkoranteng/index.html` directly in any modern web browser, **or**
2. Serve the folder locally with VS Code **Live Server** or Python:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/frontend/widgets/rolandkoranteng/` in your browser.
