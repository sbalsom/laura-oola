/**
 * velocity-animate (C) 2014-2017 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */

//  // each line is its own object
const body = document.querySelector('body');

elements = document.querySelectorAll(".blasted-text span");
firstLine = document.querySelectorAll('.first-line span')
secondLine = document.querySelectorAll('.second-line span')
thirdLine = document.querySelectorAll('.third-line span')
fourthLine = document.querySelectorAll('.fourth-line span')
const drunkAnimation = () => {
console.log(elements)
firstLine.velocity({
  opacity:1
}, {
  stagger: 300,
  duration: 1000 });

secondLine.velocity({
  opacity:1}, {
    stagger: 300,
    duration:1500,
    delay: 5500
  });

thirdLine.velocity({
  opacity:1}, {
    stagger: 300,
    duration:1000,
    delay: 11500
  });

fourthLine.velocity({
  opacity:1}, {
    stagger: 300,
    duration:1000,
    delay:16500
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




