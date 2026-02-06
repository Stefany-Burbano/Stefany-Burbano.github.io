(function () {
  // ===== Mobile nav toggle =====
  const btn = document.getElementById("navToggle");
  const nav = document.getElementById("navLinks");

  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("open");
      const open = nav.classList.contains("open");
      btn.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !btn.contains(e.target)) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ===== Theme toggle (dark mode) =====
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

  // Initial theme:
  // 1) saved preference, else 2) system preference
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved ? saved : (prefersDark ? "dark" : "light"));

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isDark = root.classList.contains("dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }
})();
