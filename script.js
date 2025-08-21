// script.js
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector("aside");
  const headerTitle = document.querySelector("header h2");

  // Mobile toggle button (reuse header title + icon if needed later)
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "☰";
  toggleBtn.className = "md:hidden p-2 rounded border border-main-purple text-main-purple ml-4";

  headerTitle?.parentNode?.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });
});