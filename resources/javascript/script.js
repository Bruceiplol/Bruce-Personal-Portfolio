// hamburger function
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

// Scroll-to-Top button function
window.addEventListener('scroll', function() {
    let scrollPosition = document.documentElement.scrollTop;
    let scrollToTopButton = document.querySelector('.scroll-to-top');
  
    if (scrollPosition > 300) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
});
  
document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});
  
// contact direct function
function redirectToSocialMedia(event, platform) {
  event.preventDefault(); // Prevent the default link behavior
  let message = "You will be redirected to " + platform + ". Are you sure?";
  if (confirm(message)) {
    // Redirect the user based on the selected social media platform
    if (platform === "facebook") {
      window.location.href = "https://www.facebook.com/bruce.ip/";
    } else if (platform === "instagram") {
      window.location.href = "https://www.instagram.com/bruce_ipzzz/";
    } else if (platform === "linkedin") {
      window.location.href = "https://www.linkedin.com/in/bruce-ip/";
    } else if (platform === "github") {
      window.location.href = "https://github.com/Bruceiplol";
    } 
  } 
}