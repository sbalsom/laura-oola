const lineOne = document.querySelectorAll('.line-one span');
const lineTwo = document.querySelectorAll('.line-two span');
const lineThree = document.querySelectorAll('.line-three span');
const lineFour = document.querySelectorAll('.line-four span');
const lineFive = document.querySelectorAll('.line-five span');
const lineSix = document.querySelectorAll('.line-six span');
const stanzaThree = document.querySelectorAll('#stanza-three span');

const through = document.getElementById('through');
const stretched = document.getElementById('stretched');
const fabric = document.getElementById('fabric');
const features = document.getElementById('features');
const blurred = document.getElementById('blurred');
const stroke = document.getElementById('stroke');
const smudging = document.getElementById('smudging');
const next = document.getElementById('next');
const open = document.getElementById('open');
const penciling = document.getElementById('penciling');
const face = document.getElementById('face');
const ruined = document.getElementById('ruined');
const erased = document.getElementById('erased');
const eyelashes = document.getElementById('eyelashes');
const nose = document.getElementById('nose');
const mouthForced = document.getElementById('mouth-forced');
const cheeks = document.getElementById('cheeks');

const swingCurtain = () => {
  // the last line is set on its own timer to appear last
  stanzaThree.velocity({opacity: 1}, {duration: 1500, delay: 20000, stagger:1000})

// each word comes in separately at random intervals
  stroke.velocity({opacity: 1}, {duration: 1500, delay: 500})
  erased.velocity({opacity: 1}, {duration: 1500, delay: 1500})
  smudging.velocity({opacity: 1}, {duration: 1500, delay: 2500})
  cheeks.velocity({opacity: 1}, {duration: 1500, delay: 3500})
  mouthForced.velocity({opacity: 1}, {duration: 1500, delay: 4500})
  through.velocity({opacity: 1}, {duration: 1500, delay: 500})
  ruined.velocity({opacity: 1}, {duration: 1500, delay: 6500})
  next.velocity({opacity: 1}, {duration: 1500, delay: 7500})
  blurred.velocity({opacity: 1}, {duration: 1500, delay: 8500})
  open.velocity({opacity: 1}, {duration: 1500, delay: 9500})
  stretched.velocity({opacity: 1}, {duration: 1500, delay: 10500})
  eyelashes.velocity({opacity: 1}, {duration: 1500, delay: 11500})
  penciling.velocity({opacity: 1}, {duration: 1500, delay: 12500})
  features.velocity({opacity: 1}, {duration: 1500, delay: 13500})
  fabric.velocity({opacity: 1}, {duration: 1500, delay: 14500})
  face.velocity({opacity: 1}, {duration: 1500, delay: 15500})
  nose.velocity({opacity: 1}, {duration: 1500, delay: 16500})

// as the words are appearing separately, the lines come and fill in one by one
  lineOne.velocity({opacity: 1}, {duration: 1500, stagger: 100})
  lineTwo.velocity({opacity: 1}, {duration: 1500, stagger: 100})
  lineThree.velocity({opacity: 1}, {duration: 1500, stagger: 100})
  lineFour.velocity({opacity: 1}, {duration: 1500, stagger: 100})
  lineFive.velocity({opacity: 1}, {duration: 1500, stagger: 100})
  lineSix.velocity({opacity: 1}, {duration: 1500, stagger: 100})
}

// it used to have a curtain effect, I just kept the name of the animation the same
const handleCurtainScroll = () => {
  if(body.getBoundingClientRect()["y"] <= -8000) {

  swingCurtain();

// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handleCurtainScroll);
  }
}

window.addEventListener('scroll', handleCurtainScroll);

