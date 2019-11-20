const oola = document.getElementById('oola');
const name = document.getElementById('name');
const aWord = document.getElementById('a-word');
const likeAny = document.getElementById('like-any');
const kid = document.getElementById('kid');
const book = document.getElementById('book');
const bread = document.getElementById('bread');
const breasts = document.getElementById('breasts');
const until = document.getElementById('until');
const oolaTwo = document.getElementById('oola-2');
const tongue = document.getElementById('tongue');
const cream = document.getElementById('cream');
const mouth = document.getElementById('mouth');


const appearText = () => {
  name.velocity({
    opacity: 1
  }, {
    duration: 2000
  });

  aWord.velocity({
    opacity:1
  }, {
    delay: 2000,
    duration: 2000
  });

  likeAny.velocity({
    opacity: 1
  }, {
    delay: 4000,
    duration: 2000
  });
  kid.velocity({
    opacity: 1
  }, {
    delay: 6000,
    duration: 2000
  });

  book.velocity({
    opacity: 1
  }, {
    delay: 8000,
    duration: 2000
  });

  bread.velocity({
    opacity: 1
  }, {
    delay: 10000,
    duration: 2000
  });

   breasts.velocity({
    opacity: 1
  }, {
    delay:12000,
    duration: 2000
  });

  until.velocity({
    opacity: 1
  }, {
    delay:14000,
    duration: 2000
  });

  oolaTwo.velocity({
    opacity: 1
  }, {
    delay:16000,
    duration: 2000
  });

  tongue.velocity({
    opacity: 1
  }, {
    delay:18000,
    duration: 2000
  });

  cream.velocity({
    opacity: 1
  }, {
    delay:20000,
    duration: 2000
  });

  mouth.velocity({
    opacity: 1
  }, {
    delay:22000,
    duration: 2000
  });
}

const animateName = () => {
  oola.velocity({
    opacity: 1,
    "font-size" : 400
  },
  {
    duration: 2500
  }).velocity({
    opacity:0
  }, {
    duration: 200
  }).velocity({
    tween: [456, 123]
}, {
    progress: function(elements, percentComplete, remaining, tweenValue, activeCall) {
        // this waits for the animation to be over and only then replaces the text
        if (tweenValue > 442) {
          appearText();
        }

    }
});
}



// triggers animation when the user scrolls to that part of the page
const handleNameScroll = () => {
  if(body.getBoundingClientRect()["y"] <= -6360) {
    animateName();
// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handleNameScroll);
  }
}

window.addEventListener('scroll', handleNameScroll);

