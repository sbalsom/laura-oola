const halfOne = document.getElementById('half-one');
const halfTwo = document.getElementById('half-two');
const movingVideo = document.getElementById('moving-video');

const moveVideo = () => {
  movingVideo.velocity({
    top: 300
  }, {
    duration: 2500
  })
}

const swingCurtain = () => {
  halfOne.velocity({
      'margin-left':0  }, {
    duration: 5000
  }).velocity({
    right: -81,
    top:400
  }, {
    duration: 5000
  });
  halfTwo.velocity({
    'margin-right':0  }, {
    duration: 5000
  }).velocity({
    left:-81,
    top:380
  }, {
    duration:5000,
    progress: function(elements, percentComplete, remaining, tweenValue, activeCall) {
        // this waits for the animation to be over and only then replaces the text
        if (percentComplete >= 0.5) {

        halfOne.innerHTML = ` her features were<br>
         hander had been penciling her,<br>
         as he made the next, a face not<br>
         Her eyelashes were crimped,<br>
         her mouth forced open, her cheeks<br>
         could we made eye contact.`
        halfTwo.innerHTML = `Through the stretched fabric,<br>
          blurred, as if a left-<br>
          smudging the last stroke<br>
          so much ruined as erased.<br>
          her nose squished,<br>
          Botoxed back. As best we`

        moveVideo();
        }


    }
});
}

const handleCurtainScroll = () => {
  if(body.getBoundingClientRect()["y"] <= -8000) {

  swingCurtain();

// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handleCurtainScroll);
  }
}

window.addEventListener('scroll', handleCurtainScroll);

