
// 5588 is when lost heart and broken should appear
const sadInvisibles = document.querySelectorAll('#sad .invisible');
const artistInvisibles = document.querySelectorAll('#artist .invisible');
const chopin = document.querySelectorAll('#chopin');

const sadAppear = () => {
  sadInvisibles.velocity({
    opacity:1
  }, {
    stagger: 1000,
    duration: 1500
  });
}

const artistAppear = () => {
  artistInvisibles.velocity({
    opacity:1
    }, {
    stagger: 1000,
    duration: 1500
  });
  chopin.velocity({
    opacity:1
    }, {
    stagger: 1000,
    duration: 1500,
    delay: 5000
  });
}

if (window.screen.width > 812) {

const handleSadScroll = () => {
  if(window.scrollY > 5500) {
  sadAppear();
// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handleSadScroll);
  }
}

const handleArtistScroll = () => {
  if(window.scrollY > 6610) {
  artistAppear();
// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handleArtistScroll);
  }
}

window.addEventListener('scroll', handleSadScroll);
window.addEventListener('scroll', handleArtistScroll);

} else {

  const pageSevenTarget = document.getElementById('sad')
  const pageSevenClicker = document.querySelector('#sad.clicker')
  console.log(pageSevenClicker)
  pageSevenTarget.addEventListener('click', function() {
    sadAppear();
    pageSevenClicker.classList.remove('clicker');

  });

  const pageSevenTargetTwo = document.getElementById('artist')
  const pageSevenClickerTwo = document.querySelector('#artist.clicker')
  pageSevenTargetTwo.addEventListener('click', function() {
    artistAppear();
    pageSevenClickerTwo.classList.remove('clicker');
  });

}
