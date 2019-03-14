// Banner Animation
const navMenu = document.querySelector('#header')
const bannerHeader = document.querySelector('.banner-header')
const bannerText = document.querySelector('.banner-text')
const bannerBtn = document.querySelector('.banner-btn')
let tl = new TimelineLite();

window.addEventListener('load', function () {
    tl.from(navMenu, 0.5, {
        left: 100,
        autoAlpha: 0
    });
    tl.from(bannerHeader, 0.5, {
        left: -100,
        autoAlpha: 0,
        delay: 0.25
    });
    tl.from(bannerText, 0.5, {
        scale: .5,
        autoAlpha: 0,
        delay: 0.25
    });
    tl.from(bannerBtn, 0.5, {
        scale: .5,
        autoAlpha: 0,
        delay: 0.25
    });
})

// Collection icon Animation
let icons = document.querySelectorAll('.icon');
let allIcons = Array.from(icons);


allIcons.forEach(function (icon) {
    icon.addEventListener('mouseover', function () {
        icon.style.transform = 'scale(1.3)'
    })
    icon.addEventListener('mouseout', function () {
        icon.style.transform = 'scale(1)'
    })
})


// P Elements Animation
let pTags = document.querySelectorAll('.stat-text');
let allpTags = Array.from(pTags);

allpTags.map(p => {
    p.addEventListener('mouseover', p => {
        TweenMax.to(p.currentTarget, 1, {
            scale: 1.1,
            ease: Bounce.easeOut
        })
    })
})

allpTags.map(p => {
    p.addEventListener('mouseout', p => {
        TweenMax.to(p.currentTarget, 1, {
            scale: 1,
            ease: Bounce.easeOut
        })
    })
})

// Buttons  Elements Animation
let buttons = document.querySelectorAll('button');
let allButtons = Array.from(buttons);

allButtons.map(b => {
    b.addEventListener('mouseover', b => {
        TweenMax.to(b.currentTarget, 1, {
            scale: 1.1,
            ease: Bounce.easeOut
        })
    })
})

allButtons.map(b => {
    b.addEventListener('mouseout', b => {
        TweenMax.to(b.currentTarget, 1, {
            scale: 1,
            ease: Back.easeIn.config(1)
        });
    })
})