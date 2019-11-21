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

const animatePageElevent = () => {
  // the last line is set on its own timer to appear last
  stanzaThree.velocity({opacity: 1}, {duration: 1500, delay: 6000, stagger:1000})

// each word comes in separately at random intervals
  stroke.velocity({opacity: 1}, {duration: 500})
  erased.velocity({opacity: 1}, {duration: 500, delay: 500})
  smudging.velocity({opacity: 1}, {duration: 500, delay: 600})
  cheeks.velocity({opacity: 1}, {duration: 500, delay: 700})
  mouthForced.velocity({opacity: 1}, {duration: 500, delay: 800})
  through.velocity({opacity: 1}, {duration: 500, delay: 900})
  ruined.velocity({opacity: 1}, {duration: 500, delay: 1000})
  next.velocity({opacity: 1}, {duration: 500, delay: 1100})
  blurred.velocity({opacity: 1}, {duration: 500, delay: 1200})
  open.velocity({opacity: 1}, {duration: 500, delay: 1300})
  stretched.velocity({opacity: 1}, {duration: 500, delay: 1400})
  eyelashes.velocity({opacity: 1}, {duration: 500, delay: 1500})
  penciling.velocity({opacity: 1}, {duration: 500, delay: 1600})
  features.velocity({opacity: 1}, {duration: 500, delay: 1700})
  fabric.velocity({opacity: 1}, {duration: 500, delay: 1800})
  face.velocity({opacity: 1}, {duration: 500, delay: 1900})
  nose.velocity({opacity: 1}, {duration: 500, delay: 2000})

// as the words are appearing separately, the lines come and fill in one by one
  lineOne.velocity({opacity: 1}, {duration: 500, stagger: 100})
  lineTwo.velocity({opacity: 1}, {duration: 500, stagger: 100})
  lineThree.velocity({opacity: 1}, {duration: 500, stagger: 100})
  lineFour.velocity({opacity: 1}, {duration: 500, stagger: 100})
  lineFive.velocity({opacity: 1}, {duration: 500, stagger: 100})
  lineSix.velocity({opacity: 1}, {duration: 500, stagger: 100})
}

// rename this function and use the scrollY instead of this rectangle thing
// it used to have a curtain effect, I just kept the name of the animation the same
const handlePageElevenScroll = () => {
  if(window.scrollY > 10683 ) {

  animatePageElevent();

// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handlePageElevenScroll);
  }
}

window.addEventListener('scroll', handlePageElevenScroll);



