/**
 * velocity-animate (C) 2014-2017 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */
const body = document.querySelector('body');
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");
const sixth = document.getElementById("sixth");
const seventh = document.getElementById("seventh");
const eigth = document.getElementById("eigth");


const handleScroll = () => {
  console.log(pageYOffset + 'px');
  console.log(first.getBoundingClientRect()["y"])
  console.log(body.getBoundingClientRect()["y"] <= -3473)
  if(body.getBoundingClientRect()["y"] <= -3473) {
    console.log('here!')
    first.velocity({
  "position": "absolute",
  "top" : 10,
  opacity: 1
  // "width": "445px"
}, {
  duration:800
}).velocity({
  top: 800 }, {
    delay: 10000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });
second.velocity({
  "position": "absolute",
  "top" : 40,
  opacity: 1
  // "width" : "655px"
}, {
  duration:1000
}).velocity({
  top: 800 }, {
    delay: 10000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });

third.velocity({
  "position": "absolute",
  "top" : 70,
  opacity: 1
  // "width" : "632px"
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
  "top" : 100,
  opacity: 1
  // "width" : "621px"
}, {
  duration:2000
}).velocity({
  top: 1000 }, {
    delay: 10000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });

fifth.velocity({
  "position": "absolute",
  "top" : 130,
  opacity: 1
  // "width" : "580px"
}, {
  duration:2500
}).velocity({
  top: 700 }, {
    delay: 12000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });

sixth.velocity({
  "position": "absolute",
  "top" : 160,
  opacity: 1
  // "width" : "597px"
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
  "top" : 190,
  opacity: 1
  // "width" : "600px"
}, {
  duration:3500
}).velocity({
  top: 500 }, {
    delay: 10000,
    duration:3000
  }).velocity({
    opacity: 0
  }, {
    duration: "slow"
  });

eigth.velocity({
  "position": "absolute",
  "top" : 220,
  opacity: 1
  // "width" : "600px"
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
  });

  window.removeEventListener('scroll', handleScroll);
  }
}

 window.addEventListener('scroll', handleScroll);




