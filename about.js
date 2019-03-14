let image = document.querySelector('.soccer-ball-img')
console.log(image)


image.addEventListener('mouseover', function(el){
    TweenMax.to(el.currentTarget, 3, {
        scale: 1.3,
        ease: Bounce.easeOut
    })

})


image.addEventListener('mouseout', function(el){
    TweenMax.to(el.currentTarget, 2, {
        scale: 1.1,
        ease: Bounce.easeOut
    })
})

