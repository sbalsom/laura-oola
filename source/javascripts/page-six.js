/**
 * velocity-animate (C) 2014-2017 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */

//  each line is its own object
const video = document.querySelector('.pg-6 .pg__video');
const elements = document.querySelectorAll(".blasted-text span");
const firstLine = document.querySelectorAll('.first-line span');
const secondLine = document.querySelectorAll('.second-line span');
const thirdLine = document.querySelectorAll('.third-line span');
const fourthLine = document.querySelectorAll('.fourth-line span');

const pageSixAnimation = () => {

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
}

const revealLineThree = () => {
  thirdLine.velocity({
    opacity:1}, {
    stagger: 300,
    duration:1000
  });
}

const revealLineFour = () => {
  fourthLine.velocity({
    opacity:1}, {
    duration:2000
  });
}

// scroll-triggered animations only on larger screens
if (window.screen.width > 812) {

  // triggers animation when the user scrolls to that part of the page

const handlePageSixScroll = () => {

  if(window.scrollY > 3450) {
    pageSixAnimation();
// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handlePageSixScroll);
  }
}

const handleLineThreeScroll = () => {

  if(window.scrollY > 4350) {
    revealLineThree();
// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handleLineThreeScroll);
  }
}

const handleLineFourScroll = () => {

  if(window.scrollY > 4795) {
    revealLineFour();
// this line is necessary so the animation doesn't flicker / repeatedly start over
  window.removeEventListener('scroll', handleLineFourScroll);
  }
}

window.addEventListener('scroll', handlePageSixScroll);
window.addEventListener('scroll', handleLineThreeScroll);
window.addEventListener('scroll', handleLineFourScroll);

} else {

// otherwise triggered by user click

  const pageSixTarget = document.querySelector('.blasted-text .first-line')
  const pageSixClicker = document.querySelector('.first-line.clicker')

  console.log(pageSixClicker)
  pageSixTarget.addEventListener('click', function() {
    pageSixAnimation();
    pageSixClicker.classList.remove('clicker');

  });

  const pageSixTargetTwo = document.querySelector('.blasted-text .third-line')
  const pageSixClickerTwo = document.querySelector('.third-line.clicker')
  pageSixTargetTwo.addEventListener('click', function() {
    revealLineThree();
    pageSixClickerTwo.classList.remove('clicker');
  });


   const pageSixTargetThree = document.querySelector('.blasted-text .fourth-line')
  const pageSixClickerThree = document.querySelector('.fourth-line.clicker')
  pageSixTargetThree.addEventListener('click', function() {
    revealLineFour();
    pageSixClickerThree.classList.remove('clicker');
  });
}



