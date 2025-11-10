
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");

  // Show all elements once on page load
  elements.forEach(el => {
    setTimeout(() => el.classList.add("visible"), 200);
  });

  // Re-trigger when scrolling into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});
