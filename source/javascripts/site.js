
// rellax takes care of parallax scrolling
(function(n,h){"function"===typeof define&&define.amd?define([],h):"object"===typeof module&&module.exports?module.exports=h():n.Rellax=h()})("undefined"!==typeof window?window:global,function(){var n=function(h,p){var a=Object.create(n.prototype),l=0,r=0,k=0,t=0,c=[],u=!0,B=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){return setTimeout(a,1E3/60)},q=null,C=window.cancelAnimationFrame||
window.mozCancelAnimationFrame||clearTimeout,D=window.transformProp||function(){var a=document.createElement("div");if(null===a.style.transform){var b=["Webkit","Moz","ms"],e;for(e in b)if(void 0!==a.style[b[e]+"Transform"])return b[e]+"Transform"}return"transform"}();a.options={speed:-2,center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}};p&&Object.keys(p).forEach(function(d){a.options[d]=p[d]});h||(h=".rellax");var m="string"===typeof h?document.querySelectorAll(h):
[h];if(0<m.length){a.elems=m;if(a.options.wrapper&&!a.options.wrapper.nodeType)if(m=document.querySelector(a.options.wrapper))a.options.wrapper=m;else{console.warn("Rellax: The wrapper you're trying to use doesn't exist.");return}var w=function(){for(var d=0;d<c.length;d++)a.elems[d].style.cssText=c[d].style;c=[];r=window.innerHeight;t=window.innerWidth;x();for(d=0;d<a.elems.length;d++){var b=a.elems[d],e=b.getAttribute("data-rellax-percentage"),g=b.getAttribute("data-rellax-speed"),h=b.getAttribute("data-rellax-zindex")||
0,l=b.getAttribute("data-rellax-min"),n=b.getAttribute("data-rellax-max"),v=a.options.wrapper?a.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;a.options.relativeToWrapper&&(v=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-a.options.wrapper.offsetTop);var f=a.options.vertical?e||a.options.center?v:0:0,k=a.options.horizontal?e||a.options.center?a.options.wrapper?a.options.wrapper.scrollLeft:window.pageXOffset||
document.documentElement.scrollLeft||document.body.scrollLeft:0:0;v=f+b.getBoundingClientRect().top;var m=b.clientHeight||b.offsetHeight||b.scrollHeight,p=k+b.getBoundingClientRect().left,q=b.clientWidth||b.offsetWidth||b.scrollWidth;f=e?e:(f-v+r)/(m+r);e=e?e:(k-p+t)/(q+t);a.options.center&&(f=e=.5);g=g?g:a.options.speed;e=y(e,f,g);b=b.style.cssText;f="";0<=b.indexOf("transform")&&(f=b.indexOf("transform"),f=b.slice(f),f=(k=f.indexOf(";"))?" "+f.slice(11,k).replace(/\s/g,""):" "+f.slice(11).replace(/\s/g,
""));c.push({baseX:e.x,baseY:e.y,top:v,left:p,height:m,width:q,speed:g,style:b,transform:f,zindex:h,min:l,max:n})}u&&(window.addEventListener("resize",w),u=!1);z()},x=function(){var d=l,b=k;l=a.options.wrapper?a.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;k=a.options.wrapper?a.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset;a.options.relativeToWrapper&&
(l=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-a.options.wrapper.offsetTop);return d!=l&&a.options.vertical||b!=k&&a.options.horizontal?!0:!1},y=function(d,b,e){var c={};d=100*e*(1-d);b=100*e*(1-b);c.x=a.options.round?Math.round(d):Math.round(100*d)/100;c.y=a.options.round?Math.round(b):Math.round(100*b)/100;return c},A=function(){x()&&!1===u&&z();q=B(A)},z=function(){for(var d,b=0;b<a.elems.length;b++){d=y((k-c[b].left+t)/(c[b].width+t),(l-
c[b].top+r)/(c[b].height+r),c[b].speed);var e=d.y-c[b].baseY,g=d.x-c[b].baseX;null!==c[b].min&&(a.options.vertical&&!a.options.horizontal&&(e=e<=c[b].min?c[b].min:e),a.options.horizontal&&!a.options.vertical&&(g=g<=c[b].min?c[b].min:g));null!==c[b].max&&(a.options.vertical&&!a.options.horizontal&&(e=e>=c[b].max?c[b].max:e),a.options.horizontal&&!a.options.vertical&&(g=g>=c[b].max?c[b].max:g));a.elems[b].style[D]="translate3d("+(a.options.horizontal?g:"0")+"px,"+(a.options.vertical?e:"0")+"px,"+c[b].zindex+
"px) "+c[b].transform}a.options.callback(d)};a.destroy=function(){for(var d=0;d<a.elems.length;d++)a.elems[d].style.cssText=c[d].style;u||(window.removeEventListener("resize",w),u=!0);C(q);q=null};w();A();a.refresh=w;return a}console.warn("Rellax: The elements you're trying to select don't exist.")};return n});


var rellax = new Rellax('.rellax');

let head = document.querySelector("head");
const body = document.querySelector('body');

let loadJS = function(src) {
  let jsLink = document.createElement('script');
  jsLink.src = src;
  head.appendChild(jsLink);
};

// header animation is loaded first

loadJS('javascripts/header.js');

// other javascript files are lazy loaded
document.addEventListener('DOMContentLoaded', function(event) {
  loadJS('javascripts/page-six.js');
  loadJS('javascripts/page-seven.js');
  loadJS('javascripts/page-eight.js');
  loadJS('javascripts/page-eleven.js');
  loadJS('javascripts/page-thirteen.js');

 });
