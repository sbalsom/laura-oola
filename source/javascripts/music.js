const invisibles = document.querySelectorAll('.invisible');

const appearWords = () => {
  invisibles.velocity({
  opacity:1
}, {
  stagger: 1000,
  duration: 1500 });
}

const handleMusicScroll = () => {

  if(body.getBoundingClientRect()["y"] <= -5200) {

  appearWords();

// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handleMusicScroll);
  }
}

window.addEventListener('scroll', handleMusicScroll);

