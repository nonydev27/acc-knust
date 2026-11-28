# Theme toggle Card

a small interactive widget that switches between light and dark mode. It has a button that you press ot switch between both modes.

## How to view it
1. In VS Code, right-click on "index.html", and choose "Open with live server" or
2. Open the "index.html" in VS Code, and at the button tab, press the "Live server button."

No installs or build build steps are needed

## How it works

- Click the **Dark mode** button to switch to the dark theme. The button then changes to **Light mode**, so you can switch back.
- The first time you open the page, it uses your device's preferred theme.
- Your choice is saved in the browser with `localStorage`, so the page opens in the same theme next time.

## Features

- Light and dark themes built with CSS variables
- Keyboard accessible: Tab to the button, then press Enter or Space
- Responsive layout that works on small screens
- Smooth colour transitions, turned off for people who prefer reduced motion

## Files

- `index.html`: the card markup
- `style.css`: layout, colours and the light and dark themes
- `script.js`: the toggle logic and saving the theme preference