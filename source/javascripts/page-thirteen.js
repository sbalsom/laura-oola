const silver = document.getElementById('silver');
const paranormal = document.getElementById('paranormal');
const stanzaFour = document.querySelector('.stanza-four');
const stamp = document.getElementById('stamp');
const stanzaFive = document.querySelector('.stanza-five');
const fine = document.getElementById('fine');
const feminine = document.getElementById('feminine');
const smear = document.getElementById('smear');

const animatePageThirteen = () => {
  silver.velocity({opacity: 1}, {duration: 1500})
  paranormal.velocity({opacity: 1}, {duration: 1500, delay: 1500})
  stanzaFour.velocity({opacity: 1}, {duration: 3000, delay: 2500})
  stamp.velocity({opacity: 1}, {duration: 1500, delay: 5000})
  stanzaFive.velocity({opacity: 1}, {duration: 3000, delay: 6500})
  fine.velocity({opacity: 1}, {duration: 1500, delay: 9000})
  feminine.velocity({opacity: 1}, {duration: 1500, delay: 10000})
  smear.velocity({opacity: 1}, {duration: 1500, delay: 11000})
}

if (window.screen.width > 812) {
const handlePageThirteenScroll = () => {
  if(window.scrollY > 13470) {
    animatePageThirteen();
// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handlePageThirteenScroll);
  }
}

window.addEventListener('scroll', handlePageThirteenScroll);

} else {
  const pageThirteenTarget = document.querySelector('.pg-13 .clicker')

  pageThirteenTarget.addEventListener('click', function() {
    animatePageThirteen();
    pageThirteenTarget.classList.remove('clicker');
  });
}
