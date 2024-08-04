gsap.from(
  ".page1 .left h1 ,.page1 .left h3, .page1 .left p,.page1 .left .get-btn",
  {
    y: 100,
    stagger: 0.5,
    rotate: 1,
    opacity: 0,
    duration: 1,
  }
);

gsap.from(".search input, .search button", {
  opacity: 0,
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".search",
    scroller: "body",
    start: "top 50%",
    end: "top 80%",
    // markers: true,
    scrub: 2
  }
});


gsap.from(".page2 .line-left",{
    opacity:0,
    x:-100,
    duration:4,
    scrollTrigger:{
        trigger: ".page2 .line-left",
        scroller:"body",
        start:"top 40%",
        end : "top 70%",
        // markers:true,
        scrub:2
    }
})
gsap.from(".page2 .line-right",{
    opacity:0,
    x:100,
    duration:4,
    scrollTrigger:{
        trigger: ".page2 .line-right",
        scroller:"body",
        start:"top 40%",
        end : "top 70%",
        // markers:true,
        scrub:2
    }
})

gsap.from(".page2 .line-left1",{
    opacity:0,
    x:-100,
    duration:4,
    scrollTrigger:{
        trigger: ".page2 .line-left1",
        scroller:"body",
        start:"top 40%",
        end : "top 70%",
        // markers:true,
        scrub:2
    }
})
gsap.from(".page2 .line-right1",{
    opacity:0,
    x:100,
    duration:4,
    scrollTrigger:{
        trigger: ".page2 .line-right1",
        scroller:"body",
        start:"top 40%",
        end : "top 70%",
        // markers:true,
        scrub:2
    }
})

gsap.from(".page2 .line-left2",{
    opacity:0,
    x:-100,
    duration:4,
    scrollTrigger:{
        trigger: ".page2 .line-left2",
        scroller:"body",
        start:"top 40%",
        end : "top 70%",
        // markers:true,
        scrub:2
    }
})


gsap.from(".page4 .form",{
    opacity:0,
    scale:1.2,
    duration:4,
    scrollTrigger:{
        trigger: ".form h4",
        scroller:"body",
        start:"top 40%",
        end : "top 70%",
        // markers:true,
        scrub:2
    }
})