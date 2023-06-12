const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function() {
    // Toggle the 'open' class on the hamburger icon
    hamburger.classList.toggle('open');
  
    // Toggle the width of the menu to show/hide it
    if (menu.style.width === '100%') {
      menu.style.width = '0';
    } else {
      menu.style.width = '100%';
    }
  });


window.addEventListener('scroll', function() {
    let scrollPosition = document.documentElement.scrollTop;
    let scrollToTopButton = document.querySelector('.scroll-to-top');
  
    if (scrollPosition > 300) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
});
  
document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});
  
  