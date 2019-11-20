const appearWords = () => {
  console.log('here');
}

const handleMusicScroll = () => {

  if(body.getBoundingClientRect()["y"] <= -4698) {
    console.log(body.getBoundingClientRect()["y"])

  appearWords();

// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handleMusicScroll);
  }
}

window.addEventListener('scroll', handleMusicScroll);

