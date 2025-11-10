console.log("script.js is loaded");

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");
  console.log("Found animate elements:", elements.length);

  // Animate everything once on load (staggered)
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("visible");
      console.log("Initial load animation:", el);
    }, i * 150);
  });

  // Animate again when scrolled into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        console.log("Scroll animation:", entry.target);
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});