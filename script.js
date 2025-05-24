document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Mobile menu toggle logic
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    mobileMenu.classList.toggle('show');
  });

  // Dropdown toggle behavior
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const content = dropdown.querySelector('.dropdown-content');

    let isLocked = false;

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      // Close other dropdowns
      dropdowns.forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('active');
          d.dataset.locked = 'false';
        }
      });

      const locked = dropdown.classList.contains('active');
      if (locked) {
        dropdown.classList.remove('active');
      } else {
        dropdown.classList.add('active');
      }
    });

    dropdown.addEventListener('mouseenter', () => {
      if (!dropdown.classList.contains('active')) {
        content.style.display = 'flex';
      }
    });

    dropdown.addEventListener('mouseleave', () => {
      if (!dropdown.classList.contains('active')) {
        content.style.display = 'none';
      }
    });
  });

  // Click outside closes active dropdowns
  document.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
        const content = dropdown.querySelector('.dropdown-content');
        if (content) content.style.display = 'none';
      }
    });
  });
});
