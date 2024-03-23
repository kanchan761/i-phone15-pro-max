function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco()

var tll =gsap.timeline()
tll.from(".page1 video",{
  opacity:0,
 
 })
tll.from(".page1 h4,.page1 button",{
 y:20,
 opacity:0,
 stagger:0.3,

})
 
// tl3.from(".page3 h1", {
//   y: 40,
//   opacity: 0,

// })



gsap.to(".page2", {

  scrollTrigger: {
    trigger: ".content2",
    scroller: ".main",
    start: "top 79%",
    end: "top 42%",
    // markers:true,
    pin: true,
  }
})

gsap.to(".page3", {

  scrollTrigger: {
    trigger: ".buttons",
    scroller: ".main",
    start: "top 83%",
    end: "top 46.1%",
    // markers:true,
    pin: true,
  }
})
gsap.from(".bi1>img", {
  transform: "scale(1.1)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".bi1",
    scroller: ".main",
    // markers:true,
    start: "top 70%",
    end: "top 10%",
    scrub: 2,
  }
})
gsap.from(".bi2>img", {
  transform: "scale(1.1)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".bi2",
    scroller: ".main",
    // markers:true,
    start: "top 70%",
    end: "top 10%",
    scrub: 2,
  }
})

gsap.to(".page4", {

  scrollTrigger:{
    trigger: " .page4 button",
    scroller: ".main",
    start: "top 69%",
    end: "top 50%",
    // markers:true,
    pin: true,
  }
})



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function page2() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".top2 ",
      scroller: ".main",
      start: "top 60%",
      end: "top 0%",
      scrub: 1,
      // markers:true,
    }
  })

  tl.from(".top2", {
    y: 40,
    opacity: 0,

  }, "hey")
  tl.from(".h2 h2", {
    y: 40,
    opacity: 0,
    stagger: 0.2
  }, "hey")
}
page2()

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3 ",
    scroller: ".main",
    start: "top 70%",
    end: "top 0%",
    scrub: 1,
    // markers:true,
  }
})

tl3.from(".page3 h1", {
  y: 40,
  opacity: 0,

})

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4 h1 ",
    scroller: ".main",
    start: "top 60%",
    end: "top -40%",
    scrub: 1,
    // markers:true,
  }
})

tl3.from(".page4 h1", {
  y: 40,
  opacity: 0,


})

tl3.from(".page4 .content4 h6 ", {
  y: 170,
  opacity: 0,
  //  delay:5,
})

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page6 .bottom6 ",
    scroller: ".main",
    start: "top 70%",
    end: "top 30%",
    scrub: 1,
    // markers:true,
  }
})
tl6.from(".bottom6 ", {
  y: 50,
  opacity: 0,
  //  delay:5
})


var tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page7 h1",
    scroller: ".main",
    start: "top 80%",
    end: "top 10%",
    scrub: 1,
    // markers:true,
  }
})
tl7.from(".page7 h1 ", {
  y: 40,
  opacity: 0,
  //  delay:5
})

var tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page8 p",
    scroller: ".main",
    start: "top 75%",
    end: "top 10%",
    scrub: 1,
    // markers:true,
  }
})
tl8.from(".page8 p ", {
  y: 40,
  opacity: 0,
  //  delay:5
})

var tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page9 p",
    scroller: ".main",
    start: "top 75%",
    end: "top 20%",
    scrub: 1,
    // markers:true,
  }
})
tl9.from(".page9 p ", {
  y: 90,
  opacity: 0,
  //  delay:5
}, "heyy")

tl9.from(".page9 img", {
  opacity: 0,
}, "heyy")



var tl10 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page10 h2",
    scroller: ".main",
    start: "top 75%",
    end: "top 20%",
    scrub: 1,
    // markers:true,
  }
})
tl10.from(".page10 .bottom10", {
  y: 90,
  opacity: 0,

})


var tl11 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page11 h2",
    scroller: ".main",
    start: "top 145%",
    end: "top 20%",
    scrub: 1,
    // markers:true,
  }
})
tl11.from(".page11 h1,.page11 p", {
  y: 90,
  opacity: 0,

})

tl11.from(".page11 .names,.page11 hr", {
  // y:90,
  opacity: 0,

})



tl11.from(".page11 .bottom11", {
  y: 90,
  opacity: 0,

})

var tl12 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page12 img",
    scroller: ".main",
    start: "top 90%",
    end: "top -120%",
    scrub: 1,
    // markers:true,
  }
})
tl12.from(".page12 img", {
  // y: 90,
  opacity: 0,

})

tl12.from(".page12 .bottom12", {
  y: 60,
  opacity: 0,
delay:0.3,
})

var tl14 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page14 .image14",
    scroller: ".main",
    start: "top 70%",
    end: "top -30%",
    scrub: 1,
    // markers:true,
  }
})
tl14.from(".page14 .image14", {
  // y: 90,
  opacity: 0,

})
tl14.from(".page14 .bottom14", {
  y: 50,
  delay:0.3,
  opacity: 0,

})

var tl15 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page15 h2",
    scroller: ".main",
    start: "top 70%",
    end: "top -30%",
    scrub: 1,
    // markers:true,
  }
})
tl15.from(".page15 h2", {
  y: 40,
  opacity: 0,

})

tl15.from(".page15 h3", {
  y: 40,
  delay:0.3,
  opacity: 0,

})

var all = document.querySelector(".all");
var silver = document.querySelector(".silver");
var blue = document.querySelector(".blue");
var white = document.querySelector(".white");
var black = document.querySelector(".black");

function resetStyles() {
  var buttons = [all, silver, blue, white, black];
  buttons.forEach(function(button) {
    button.style.border = "";
    button.style.transform = "";
    button.style.boxShadow = "";
  });
}

all.addEventListener("click", function() {
  resetStyles();
  gsap.to(".pic1", { opacity: 1 });
  gsap.to(".content2>p", { opacity: 1 });
  all.style.border = "3.1px solid rgb(46, 32, 42)";
  all.style.transform = "scale(1.11)";
  all.style.boxShadow = "0 0 0 3px white";
  
});

silver.addEventListener("click", function() {
  resetStyles();
  gsap.to(".pic1,.pic3,.pic4,.pic5", { opacity: 0 });
  gsap.to(".pic2", { opacity: 1 });
  gsap.to(".content2>p", { opacity: 0 });
  gsap.to(".content2>p1", { opacity: 1 });
  silver.style.border = "3.1px solid rgb(46, 32, 42)";
  silver.style.transform = "scale(1.11)";
  silver.style.boxShadow = "0 0 0 3px white";
});

blue.addEventListener("click", function() {
  resetStyles();
  gsap.to(".pic1,.pic2,.pic4,.pic5", { opacity: 0 });
  gsap.to(".pic3", { opacity: 1 });
  blue.style.border = "3.1px solid rgb(46, 32, 42)";
  blue.style.transform = "scale(1.11)";
  blue.style.boxShadow = "0 0 0 3px white";
});

white.addEventListener("click", function() {
  resetStyles();
  gsap.to(".pic1,.pic3,.pic2,.pic5", { opacity: 0 });
  gsap.to(".pic4", { opacity: 1 });
  gsap.to(".content2>p1", { opacity: 0 });
  gsap.to(".content2>p2", { opacity: 1 });
  white.style.border = "3.1px solid rgb(46, 32, 42)";
  white.style.transform = "scale(1.11)";
  white.style.boxShadow = "0 0 0 3px white";
});

black.addEventListener("click", function() {
  resetStyles();
  gsap.to(".pic1,.pic3,.pic2,.pic4", { opacity: 0 });
  gsap.to(".pic5", { opacity: 1 });
  gsap.to(".content2>p2", { opacity: 0 });
  gsap.to(".content2>p3", { opacity: 1 });
  black.style.border = "3.1px solid rgb(46, 32, 42)";
  black.style.transform = "scale(1.11)";
  black.style.boxShadow = "0 0 0 3px white";
});
