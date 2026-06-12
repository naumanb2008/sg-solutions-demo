// Mobile navigation toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  // Close menu when a link is clicked
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Contact form (demo handler — no backend)
function handleSubmit(event) {
  event.preventDefault();
  const note = document.getElementById("formNote");
  if (note) {
    note.textContent = "Thanks! Your message has been received — we'll be in touch shortly.";
  }
  event.target.reset();
  return false;
}

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
