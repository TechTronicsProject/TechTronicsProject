// Sidebar link hover animation (extra smooth)
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transition = "transform 0.3s, background 0.3s";
  });
});

// Dummy search functionality
document.querySelectorAll(".search-bar button").forEach(btn => {
  btn.addEventListener("click", () => {
    let input = btn.previousElementSibling.value;
    if (input.trim() !== "") {
      alert("No Result for " + input);
    } else {
      alert("Please enter a search term.");
    }
  });
});
