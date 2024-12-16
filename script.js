
// DYNAMIC NAVBAR
// Handle navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 200) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Highlight the active page in the navbar
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});

// Handle homepage jumbotron background change on scroll
window.addEventListener("scroll", function () {
  const inspo = document.querySelector(".inspiration-section");
  if (window.scrollY > 25) {
    inspo.classList.add("inspiration-section-scroll");
  } else {
    inspo.classList.remove("inspiration-section-scroll");
  }
});


// TESTIMONIAL MODAL
const testimonialList = document.getElementById("testimonial-list");
const testimonialForm = document.getElementById("testimonial-form");

const testimonials = [
  {
    name: "John Doe",
    content: "Mystic Yoga changed my life!",
    display: "full-name",
  },
  {
    name: "J.D.",
    content: "I loved the 8-week wellness workshop!",
    display: "initials",
  },
  { name: "Anonymous", content: "Highly recommend!", display: "anonymous" },
];

function renderTestimonials() {
  testimonialList.innerHTML = testimonials
    .map(({ name, content, display }) => {
      const displayName =
        display === "full-name"
          ? name
          : display === "initials"
          ? name
              .split(" ")
              .map((n) => n[0])
              .join(".")
          : "Anonymous";
      return `
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <blockquote class="blockquote">
                <p class="mb-0">${content}</p>
                <footer class="blockquote-footer">${displayName}</footer>
              </blockquote>
            </div>
          </div>
        </div>`;
    })
    .join("");
}

testimonialForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value || "Anonymous";
  const displayOption = document.getElementById("display-option").value;
  const testimonialText = document.getElementById("testimonial").value;

  testimonials.push({ name, content: testimonialText, display: displayOption });
  renderTestimonials();
  $("#testimonialModal").modal("hide");
});

document.addEventListener("DOMContentLoaded", renderTestimonials);
