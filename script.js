const header = document.getElementById("mainHeader");
const videoSection = document.querySelector(".video-section");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// Hamburger toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

// Header background on scroll
window.addEventListener("scroll", () => {
  const videoBottom = videoSection.offsetTop + videoSection.offsetHeight;
  const scrollY = window.scrollY;

  if (scrollY > videoBottom || scrollY > 50) {
    header.classList.remove("transparent");
    header.classList.add("white-bg");
  } else {
    header.classList.add("transparent");
    header.classList.remove("white-bg");
  }
});


// Header background on scroll