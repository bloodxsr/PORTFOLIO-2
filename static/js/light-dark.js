// === Theme Toggle Script ===
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = toggle.querySelector("i");

  // Load saved mode (if any)
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  // Toggle theme on click
  toggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");

    // Update icon
    if (isLight) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }

    // Save preference
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});
