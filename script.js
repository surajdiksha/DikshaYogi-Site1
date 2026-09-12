const clock = document.getElementById("clock");
const themeBtn = document.getElementById("themeBtn");

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleString([], {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}
updateClock();
setInterval(updateClock, 30000);

const savedTheme = localStorage.getItem("diksha-theme");
if (savedTheme === "dark") document.body.classList.add("dark");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "diksha-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
