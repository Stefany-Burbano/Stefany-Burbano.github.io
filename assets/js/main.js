(function () {
  // Mobile nav toggle
  const navBtn = document.getElementById("navToggle");
  const nav = document.getElementById("navLinks");

  if (navBtn && nav) {
    navBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
      navBtn.setAttribute("aria-expanded", String(nav.classList.contains("open")));
    });

    document.addEventListener("click", (e) => {
      const clickedInside = nav.contains(e.target) || navBtn.contains(e.target);
      if (!clickedInside) {
        nav.classList.remove("open");
        navBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Theme toggle
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.classList.add("dark");
      if (themeIcon) themeIcon.textContent = "☀️";
    } else {
      root.classList.remove("dark");
      if (themeIcon) themeIcon.textContent = "🌙";
    }
    localStorage.setItem("theme", theme);
  }

  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved ? saved : (prefersDark ? "dark" : "light"));

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      applyTheme(root.classList.contains("dark") ? "light" : "dark");
    });
  }
})();
