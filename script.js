console.log("script.js is loaded");

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");
  console.log("Found animate elements:", elements.length);

  // Scroll-only: no on-load .visible, only when entering viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        console.log("Scroll animation:", entry.target);
        observer.unobserve(entry.target); // optional: animate once
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -10% 0px", // start just before fully in view (optional)
    threshold: 0
  });

  elements.forEach(el => observer.observe(el));
});