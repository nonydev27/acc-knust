# ACC KNUST Session Countdown

A small countdown widget that shows the time left until the next AmaliTech Coding Club (ACC) KNUST session. Built with plain HTML, CSS and vanilla JavaScript.

## Files

- `index.html` - the structure of the widget
- `style.css` - the dark burgundy theme, glowing numbers and responsive layout
- `script.js` - the countdown logic, updating every second

## How to run it

1. Open this folder in VS Code.
2. Right-click `index.html` and choose **Open with Live Server**.
   Alternatively, double-click `index.html` to open it directly in your browser.

No installs or build steps are needed.

## How to change the session date

Open `script.js` and edit the date on the first line:

```js
const sessionDate = new Date("2026-12-05T16:00:00Z");
```

The format is `YYYY-MM-DDTHH:MM:SSZ`, and the `Z` means GMT.

## Author

Nuamah Maymuna Ishaak - [@minuamah1](https://github.com/minuamah1)