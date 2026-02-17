(function () {
  // ===== Mobile nav toggle =====
  const navBtn = document.getElementById("navToggle");
  const nav = document.getElementById("navLinks");

  if (navBtn && nav) {
    navBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
      const open = nav.classList.contains("open");
      navBtn.setAttribute("aria-expanded", String(open));
    });

    // close on nav link click (mobile)
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        navBtn.setAttribute("aria-expanded", "false");
      });
    });

    // close on outside click
    document.addEventListener("click", (e) => {
      const clickedInside = nav.contains(e.target) || navBtn.contains(e.target);
      if (!clickedInside) {
        nav.classList.remove("open");
        navBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ===== Theme toggle (dark mode) + persistence =====
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
      const isDark = root.classList.contains("dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }

  // ===== Optional: close other desplegables when one opens (accordion behavior) =====
  // If you prefer multiple open at once, remove this block.
  document.querySelectorAll("details.paper").forEach(d => {
    d.addEventListener("toggle", () => {
      if (d.open) {
        document.querySelectorAll("details.paper").forEach(other => {
          if (other !== d) other.open = false;
        });
      }
    });
  });
})();
