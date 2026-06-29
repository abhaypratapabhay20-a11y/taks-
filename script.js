document.addEventListener('DOMContentLoaded', () => {
  
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!menuToggle || !siteNav) return;

  const toggleMenu = (event) => {
    if (event) event.preventDefault(); 
    
    const isMenuOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    
    menuToggle.setAttribute('aria-expanded', !isMenuOpen);
    siteNav.classList.toggle('is-active');
  };

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('is-active');
  };

  menuToggle.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        closeMenu();
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      if (menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    }
  });
});