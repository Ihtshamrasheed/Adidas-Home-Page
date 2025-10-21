document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger-toggle');
    const closeBtn = document.querySelector('.menu-close');
    const secondaryNav = document.querySelector('.secondary-nav');
    const body = document.body;

    const sections = document.querySelectorAll(
      '.main-body, .hero-section, .hero-content, .zigzag-section, .post-section, .contact-section, .footer-nav'
    );

    burger.addEventListener('click', () => {
         secondaryNav.classList.remove("hidden");
         secondaryNav.classList.add("unhidden");

      burger.style.display = 'none';
      closeBtn.style.display = 'inline';
      body.classList.add('menu-open');

      // Hide other sections
      sections.forEach(el => el.classList.add('hidden'));
    });

    closeBtn.addEventListener('click', () => {
     secondaryNav.classList.add("hidden");
         secondaryNav.classList.remove("unhidden");


      burger.style.display = 'inline';
      closeBtn.style.display = 'none';
      body.classList.remove('menu-open');

      // Restore original display
      sections.forEach(el => el.classList.remove('hidden'));
    });
    window.addEventListener("resize", screenchanged, );
function screenchanged() {
if ( window.innerWidth > 940) {     
         secondaryNav.classList.remove("hidden");
    
     burger.classList.add("hidden");
    } else if ( window.innerWidth < 940) {     
    
     burger.classList.remove("hidden");
    } 
}
  });