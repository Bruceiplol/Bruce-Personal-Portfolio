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