// THEME TOGGLE (dark is default)
const toggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

// Default = DARK
if (savedTheme === "light") {
  document.body.classList.add("light");
  toggle.textContent = "🌙";
} else {
  toggle.textContent = "☀️";
}

toggle.onclick = () => {
  const isLight = document.body.classList.toggle("light");
  toggle.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
};

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
