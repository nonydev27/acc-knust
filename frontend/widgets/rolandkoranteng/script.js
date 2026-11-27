(() => {
  const THEME_STORAGE_KEY = "acc-knust-widget-theme";
  const RSVP_STORAGE_KEY = "acc-knust-widget-rsvps";

  /**
   * Returns the next upcoming Date matching the requested UTC weekday and hour.
   * Keeps the countdown live regardless of when the widget is opened.
   */
  function getNextWeekdayUTC(targetDay, hourUTC, minuteUTC = 0) {
    const now = new Date();
    const candidate = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      hourUTC,
      minuteUTC,
      0,
      0
    ));

    let dayDiff = (targetDay - now.getUTCDay() + 7) % 7;
    if (dayDiff === 0 && candidate <= now) {
      dayDiff = 7;
    }
    candidate.setUTCDate(candidate.getUTCDate() + dayDiff);
    return candidate;
  }

  const sessions = [
    {
      id: "fe-git-lab",
      title: "Frontend Track: Git Workflow & PR Review Lab",
      track: "Frontend",
      venue: "KNUST Engineering Auditorium • Lab 2",
      date: getNextWeekdayUTC(6, 16, 0) // Next Saturday 16:00 GMT
    },
    {
      id: "fe-ui-state",
      title: "Interactive UI Components with Vanilla JS",
      track: "Frontend",
      venue: "AmaliTech Hub • Online & In-Person",
      date: getNextWeekdayUTC(3, 18, 0) // Next Wednesday 18:00 GMT
    },
    {
      id: "acc-standup",
      title: "ACC KNUST Weekly Community Standup & Demo",
      track: "General",
      venue: "KNUST Innovation Centre",
      date: getNextWeekdayUTC(5, 17, 0) // Next Friday 17:00 GMT
    }
  ].sort((a, b) => a.date - b.date);

  const elements = {
    root: document.documentElement,
    themeToggle: document.getElementById("theme-toggle"),
    themeIcon: document.querySelector(".theme-icon"),
    themeLabel: document.querySelector(".theme-label"),
    activeTrack: document.getElementById("active-track"),
    activeVenue: document.getElementById("active-venue"),
    activeTitle: document.getElementById("active-session-title"),
    activeDate: document.getElementById("active-session-date"),
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
    rsvpBtn: document.getElementById("rsvp-btn"),
    rsvpStatus: document.getElementById("rsvp-status"),
    sessionList: document.getElementById("session-list"),
    filterButtons: document.querySelectorAll(".filter-btn")
  };

  let selectedSessionId = sessions[0].id;
  let activeFilter = "All";
  let rsvps = loadRsvps();

  function loadRsvps() {
    try {
      const saved = localStorage.getItem(RSVP_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  }

  function saveRsvps() {
    try {
      localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(rsvps));
    } catch {
      // Ignore storage errors in restricted environments
    }
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    elements.root.setAttribute("data-theme", theme);
    elements.themeToggle.setAttribute("aria-pressed", String(isDark));
    elements.themeIcon.textContent = isDark ? "☀️" : "🌙";
    elements.themeLabel.textContent = isDark ? "Light Mode" : "Dark Mode";
  }

  function initTheme() {
    let savedTheme = "light";
    try {
      savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "light";
    } catch {
      savedTheme = "light";
    }
    applyTheme(savedTheme);

    elements.themeToggle.addEventListener("click", () => {
      const nextTheme =
        elements.root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // Ignore storage errors
      }
    });
  }

  function formatSessionDate(date) {
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
      timeZoneName: "short"
    }).format(date);
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function getSelectedSession() {
    return sessions.find((session) => session.id === selectedSessionId) || sessions[0];
  }

  function renderCountdown() {
    const session = getSelectedSession();
    const diffMs = Math.max(0, session.date.getTime() - Date.now());

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    elements.days.textContent = pad(days);
    elements.hours.textContent = pad(hours);
    elements.minutes.textContent = pad(minutes);
    elements.seconds.textContent = pad(seconds);
  }

  function renderActiveSessionDetails() {
    const session = getSelectedSession();
    const isAttending = Boolean(rsvps[session.id]);

    elements.activeTrack.textContent = `${session.track} Track`;
    elements.activeVenue.textContent = session.venue;
    elements.activeTitle.textContent = session.title;
    elements.activeDate.textContent = formatSessionDate(session.date);

    elements.rsvpBtn.textContent = isAttending ? "Attending ✓" : "Mark as Attending";
    elements.rsvpBtn.classList.toggle("is-attending", isAttending);
    elements.rsvpStatus.textContent = isAttending
      ? "You are checked in for this session."
      : "";

    renderCountdown();
  }

  function renderSessionList() {
    const visibleSessions =
      activeFilter === "All"
        ? sessions
        : sessions.filter((session) => session.track === activeFilter);

    elements.sessionList.innerHTML = "";

    visibleSessions.forEach((session) => {
      const li = document.createElement("li");
      li.className = "session-item";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "session-btn";
      if (session.id === selectedSessionId) {
        button.classList.add("is-selected");
      }

      const info = document.createElement("div");
      info.className = "session-info";

      const title = document.createElement("span");
      title.className = "session-name";
      title.textContent = session.title;

      const meta = document.createElement("span");
      meta.className = "session-meta";
      meta.textContent = `${formatSessionDate(session.date)} • ${session.venue}`;

      info.append(title, meta);

      const badge = document.createElement("span");
      badge.className = "session-track-badge";
      badge.textContent = rsvps[session.id] ? "Attending" : session.track;

      button.append(info, badge);
      button.addEventListener("click", () => {
        selectedSessionId = session.id;
        renderActiveSessionDetails();
        renderSessionList();
      });

      li.appendChild(button);
      elements.sessionList.appendChild(li);
    });
  }

  function bindEvents() {
    elements.rsvpBtn.addEventListener("click", () => {
      const session = getSelectedSession();
      rsvps[session.id] = !rsvps[session.id];
      saveRsvps();
      renderActiveSessionDetails();
      renderSessionList();
    });

    elements.filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        elements.filterButtons.forEach((btn) =>
          btn.classList.toggle("is-active", btn === button)
        );
        renderSessionList();
      });
    });
  }

  initTheme();
  bindEvents();
  renderActiveSessionDetails();
  renderSessionList();
  setInterval(renderCountdown, 1000);
})();
