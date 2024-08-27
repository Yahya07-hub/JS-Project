// Scroll Effect On Images
gsap.to('.ambulances .left-inner', {
    scrollTrigger: {
        trigger: ".ambulances .inner-container",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
        // markers: true
    },
    y: "-200%",
    ease: Power1,
})

let sections = document.querySelectorAll(".ambulances .left-inner .button")
Shery.imageEffect(".images", {
    style: 5,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                top: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress + index)
                }
            })
        })
    },
});

// Mouse Follower
Shery.mouseFollower()

// Make Magnet
Shery.makeMagnet(".magnet")