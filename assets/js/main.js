(function () {
  const btn = document.getElementById("navToggle");
  const nav = document.getElementById("navLinks");

  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("open");
      const open = nav.classList.contains("open");
      btn.setAttribute("aria-expanded", String(open));
    });

    // close on link click (mobile)
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    // close on outside click
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !btn.contains(e.target)) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }
})();

