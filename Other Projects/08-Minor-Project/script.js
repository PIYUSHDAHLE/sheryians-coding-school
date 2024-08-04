var t = gsap.timeline()

t.from("nav .left h2",{
    y:10,
    opacity: 0,
    duration:0.7,
    delay:0.5
})

t.from("nav .right h4",{
    y:10,
    opacity: 0,
    duration:1,
    stagger:0.2
})

t.from(".box1 img",{
    scale:3,
    opacity: 0,
    duration:0.7
})



t.from(".content",{
    rotate:1000,
    scale:0,
    opacity: 0,
    duration:3
})


t.from(".content h1",{
    y:10,
    opacity: 0,
    duration:1,
    stagger:1 
})
t.from(".box2 img",{
    x:-200,
    opacity:0,
    stagger:1 


})
