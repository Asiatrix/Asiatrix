 const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

  function updateHeaderBackground() {
    if (window.scrollY > 50 || header.matches(':hover') || hamburger.classList.contains('active')) {
      header.classList.add('white-bg');
    } else {
      header.classList.remove('white-bg');
    }
  }

  // Scroll event
  window.addEventListener('scroll', updateHeaderBackground);

  // Mouse enter/leave
  header.addEventListener('mouseenter', updateHeaderBackground);
  header.addEventListener('mouseleave', updateHeaderBackground);

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');

    if (mobileMenu.classList.contains('open')) {
      header.classList.add('menu-open');
    } else {
      header.classList.remove('menu-open');
    }

    updateHeaderBackground();
  });


  function toggleCard(card) {
    card.classList.toggle('show');
  }

