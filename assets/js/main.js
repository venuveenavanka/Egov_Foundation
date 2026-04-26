// Function to observe reveal elements
const refreshRevealObserver = () => {
  const revealElements = document.querySelectorAll(".reveal:not(.active)");
  revealElements.forEach((el) => revealObserver.observe(el));
};

// Animation Observer logic
const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, {
  threshold: 0.1,
});

// load header
fetch("components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    refreshRevealObserver();
  });

// Load footer
fetch("components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
    refreshRevealObserver();
  });

// Toggle body scroll when navbar is open
document.addEventListener("show.bs.collapse", function (e) {
  if (e.target.id === "navbarNav") {
    document.body.classList.add("menu-open");
  }
});

document.addEventListener("hide.bs.collapse", function (e) {
  if (e.target.id === "navbarNav") {
    document.body.classList.remove("menu-open");
  }
});

document.addEventListener("DOMContentLoaded", refreshRevealObserver);

