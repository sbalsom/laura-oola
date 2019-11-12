/**
 * velocity-animate (C) 2014-2017 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */

 // each line is its own object
const body = document.querySelector('body');
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");
const sixth = document.getElementById("sixth");
const seventh = document.getElementById("seventh");
const eigth = document.getElementById("eigth");
const textBox = document.getElementById('text-box');

const drunkAnimation = () => {
    first.velocity({
  "position": "absolute",
  "top" : 10,
  opacity: 1
}, {
  duration:800
}).velocity({
  top: 500 }, {
    delay: 10000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });

second.velocity({
  "position": "absolute",
  "top" : 45,
  opacity: 1
}, {
  duration:1000
}).velocity({
  top: 300 }, {
    delay: 10000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });

third.velocity({
  "position": "absolute",
  "top" : 80,
  opacity: 1
}, {
  duration:1500
}).velocity({
  top: 600 }, {
    delay: 10000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });

fourth.velocity({
  "position": "absolute",
  "top" : 115,
  opacity: 1
}, {
  duration:2000
}).velocity({
  top: 400 }, {
    delay: 10000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });

fifth.velocity({
  "position": "absolute",
  "top" : 150,
  opacity: 1
}, {
  duration:2500
}).velocity({
  top: 650 }, {
    delay: 12000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });

sixth.velocity({
  "position": "absolute",
  "top" : 185,
  opacity: 1
}, {
  duration:3000
}).velocity({
  top: 450 }, {
    delay: 10000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });

seventh.velocity({
  "position": "absolute",
  "top" : 220,
  opacity: 1
}, {
  duration:3500
}).velocity({
  top: 600 }, {
    delay: 10000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });

eigth.velocity({
  "position": "absolute",
  "top" : 255,
  opacity: 1
}, {
  duration:4000
}).velocity({
  top: 500 }, {
    delay: 10000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  }).velocity({
    tween: [456, 123]
}, {
    progress: function(elements, percentComplete, remaining, tweenValue, activeCall) {
        // this waits for the animation to be over and only then replaces the text
        if (tweenValue >= 442) {
          textBox.innerHTML = `Oola poured each of us a drink,<br>choosing from the Orbitson’s expansive wet bar.<br>We were like children with taped-on corsages,<br>estimating our own depths, guessing at love.<br>The windows would be open, the smell of the city suffusing the room.<br>It ate at the curtains, warped the dark wood,<br>did all the things we as house-sitters were supposed to prevent <br>but as self-absorbed lovers found excusable.`
        }

    }
});

}


// triggers animation when the user scrolls to that part of the page
const handleDrunkScroll = () => {
  if(body.getBoundingClientRect()["y"] <= -3473) {
    drunkAnimation();
// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handleDrunkScroll);
  }
}

window.addEventListener('scroll', handleDrunkScroll);




