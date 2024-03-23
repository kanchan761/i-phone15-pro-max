var tl=gsap.timeline()

tl.to(".bottom2>.video1",{
  transform:"translatex(-110%)",
  duration:8,
  delay:7,
ease:"power4",
// opacity:0
})

tl.to(".bottom2>.video2",{
transform:"translateX(-100%)",
ease:"power4",

})
tl.to(".bottom2>.video2",{
  transform:"translateX(-100%)",
delay:2,
ease:"power4",
})


var all = document.querySelector(".all")
var pic1 = document.querySelector(".pic1")

var bottom4 =document.querySelector("bottom4")
bottom4.addEventListener("click",function(){
  
forEach(function(elem){
all.style.border="3.1px solid rgb(46, 32, 42)"
all.style.transform="scale(1.11)"
all.style.boxShadow= "0 0 0 3px white"
 });

})


all.addEventListener("click",function(elem){
all.style.border="3.1px solid rgb(46, 32, 42)"
all.style.transform="scale(1.11)"
all.style.boxShadow= "0 0 0 3px white"
gsap.to(".pic1",{
  opacity:1
})
gsap.to(".content2>p",{
opacity:1,

})

})

var silver = document.querySelector(".silver")
var pic2 = document.querySelector(".pic2")

silver.addEventListener("click",function(elem){
silver.style.border="3.1px solid rgb(46, 32, 42)"
silver.style.transform="scale(1.11)"
silver.style.boxShadow= "0 0 0 3px white"
gsap.to(".pic1,.pic3,.pic4,.pic5",{
  opacity:0
})
gsap.to(".pic2",{
opacity:1
})
gsap.to(".content2>p",{
  opacity:0,
  
})
  gsap.to(".content2>p1",{
    opacity:1,
    
    })
})

var blue = document.querySelector(".blue")
var pic3 = document.querySelector(".pic3")

blue.addEventListener("click",function(elem){
blue.style.border="3.1px solid rgb(46, 32, 42)"
blue.style.transform="scale(1.11)"
blue.style.boxShadow= "0 0 0 3px white"
gsap.to(".pic1,.pic2,.pic4,.pic5",{
  opacity:0
})
gsap.to(".pic3",{
  opacity:1
})



})

var white = document.querySelector(".white")
var pic4 = document.querySelector(".pic4")

white.addEventListener("click",function(elem){
white.style.border="3.1px solid rgb(46, 32, 42)"
white.style.transform="scale(1.11)"
white.style.boxShadow= "0 0 0 3px white"
gsap.to(".pic1,.pic3,.pic2,.pic5",{
  opacity:0
})
  gsap.to(".pic4",{
    opacity:1
    
})
gsap.to(".content2>p1",{
  opacity:0,
  
  })
  gsap.to(".content2>p2",{
    opacity:1,
    
    })

})

var black = document.querySelector(".black")
var pic4 = document.querySelector(".pic4")

black.addEventListener("click",function(elem){
black.style.border="3.1px solid rgb(46, 32, 42)"
black.style.transform="scale(1.11)"
black.style.boxShadow= "0 0 0 3px white"
gsap.to(".pic1,.pic3,.pic2,.pic4",{
  opacity:0
})
  gsap.to(".pic5",{
    opacity:1
    
})
gsap.to(".content2>p2",{
  opacity:0,
  
  })
  gsap.to(".content2>p3",{
    opacity:1,
    
 })


})



gsap.to(".page2",{
  
  scrollTrigger:{
    trigger:".content2",
    scroller:".main",
    start:"top 79%",
    end:"top 42%",
    // markers:true,
    pin:true,
  }
})

gsap.to(".page3",{
  
  scrollTrigger:{
    trigger:".buttons",
    scroller:".main",
    start:"top 83%",
    end:"top 46.1%",
    // markers:true,
    pin:true,
  }
})

gsap.from(".bi1>img",{
transform:"scale(1.1)",
opacity:0,
scrollTrigger:{
  trigger:".bi1",
  scroller:".main",
  // markers:true,
  start:"top 70%",
  end:"top 10%",
  scrub:2,
}
})
gsap.from(".bi2>img",{
  transform:"scale(1.1)",
  opacity:0,
  scrollTrigger:{
    trigger:".bi2",
    scroller:".main",
    // markers:true,
    start:"top 70%",
    end:"top 10%",
    scrub:2,
  }
  })


  gsap.to(".page6",{
  
    scrollTrigger:{
      trigger:".b6",
      scroller:".main",
      start:"top 90%",
      end:"top 8%",
      markers:true,
      pin:true,
    }
  })



var image = document.querySelector("images8 img")
document.querySelector(".buttonright").addEventListener("click",function(){
  forEach(function(elem){
    tl8.to(".images8 img",{
      x:-300,
      scale:0.9
    })
});
})




