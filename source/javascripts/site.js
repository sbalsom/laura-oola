
let head = document.querySelector("head");
const body = document.querySelector('body');

let loadJS = function(src) {
  let jsLink = document.createElement('script');
  jsLink.src = src;
  head.appendChild(jsLink);
};

// only load parallax scrolling on larger devices that can handle it

if (window.screen.width > 667) {
  loadJS('javascripts/rellax.js');
}

// header animation is loaded first

loadJS('javascripts/header.js');

// other javascript files are lazy loaded
document.addEventListener('DOMContentLoaded', function(event) {
  loadJS('javascripts/page-six.js');
  loadJS('javascripts/page-seven.js');
  loadJS('javascripts/page-eight.js');
  loadJS('javascripts/page-eleven.js');
  loadJS('javascripts/page-thirteen.js');

 });


