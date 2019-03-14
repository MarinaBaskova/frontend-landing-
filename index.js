// Banner Animation
const navMenu = document.querySelector('#header')
const bannerHeader = document.querySelector('.banner-header')
const bannerText = document.querySelector('.banner-text')
const bannerBtn = document.querySelector('.banner-btn')


let tl = new TimelineLite();

window.addEventListener('load', function(){
  tl.from(navMenu, 0.5, {left:100, autoAlpha:0});
  tl.from(bannerHeader, 0.5, {left:-100, autoAlpha:0, delay:0.25});
  tl.from(bannerText, 0.5, {scale:.5, autoAlpha:0, delay:0.25});
  tl.from(bannerBtn, 0.5, {scale:.5, autoAlpha:0, delay:0.25});
})

