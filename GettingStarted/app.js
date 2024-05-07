gsap.registerPlugin(ScrollTrigger);

/* gsap.to(".square", {
  x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: ".square2",
    start: "top 80%",
    // end: () => `+=${document.querySelector(".square").offsetHeight}`,
    end: "top 30%",
    scrub: 4,
    toggleActions: "restart none none none",
    //  onEnter onLeave onEnterBack onLeaveBack
    // play pause resume reset restart complete reverse none
    pin: ".square",
    pinSpacing: true,
    // give the pin element the height of the trigger
    markers: {
      startColor: "purple",
      endColor: "fushia",
      fontSize: "1rem",
      ident: 200,
    },
    toggleClass: "red",
    // classe applqiuée quand l'anim commence
  },
});
 */

// timeline so we dont need to use delay
/* const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    markers: true,
    start: "top 80%", 
    // top of the box to 80% of the viewport
    end: "top 30%",
    scrub: 4,
    toggleActions: "restart none none none",
  },
});

tl.to(".box", { x: 500, duration: 2 })
  .to(".box", { y: 200, duration: 3 })
  .to(".box", { x: 0, duration: 2 })
  .to(".box", { y: 0, duration: 2 }); */

// standalone scrollTrigger instance

/* ScrollTrigger.create({
  trigger: ".box",
  start: "top 80%",
  end: "top 50%",
  markers: true,
  toggleClass: "box-red",
}); */

ScrollTrigger.create({
  trigger: ".box",
  start: "top 80%",
  end: "top 50%",
  markers: {
    startColor: "purple",
    endColor: "fushia",
    fontSize: "1rem",
    ident: 200,
  },
  toggleClass: "box-red",
  /* onEnter: (self) => console.log("onEnter", self),
  onLeave: (self) => console.log("onLeave", self),
  onEnterBack: (self) => console.log("onEnterBack", self),
  onLeaveBack: (self) => console.log("onLeaveBack", self), */
  onUpdate: (self) => console.log(self),
});

ScrollTrigger.create({
  markers: true,
  start: "top 6%",
  trigger: ".div1",
  toggleClass: { targets: "nav", className: "nav-active" },
});
