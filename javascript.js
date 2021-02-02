//TEXT-2  ANIMATIONS
const smlAnim = new TimelineMax({
  scrollTrigger: {
    trigger: ".container",
    // scrub: true,
    // start: "0%",
    // end: "200%",
    // markers: true,
    // toggleActions: "play reverse play reverse",
  },
});

smlAnim.from(".box", {scale: .8,opacity: 0,stagger: {amount: 1.1},duration: 2,});
smlAnim.from(".main_text1", {y: -60,opacity: 0, stagger: {amount: .5},skewY: -5,},1);
smlAnim.from(".main_line", {x: -60,opacity: 0},1);
smlAnim.from(".main_btn", {x: -60,opacity: 0},1);
smlAnim.from(".logo", { y: -200, opacity: 0, duration: 1 },2);
smlAnim.from(".navigation", { x: 100, opacity: 0, duration: 1 },2);

//parallax effect
const paralaxEff = new TimelineMax({
  scrollTrigger: {
    trigger: ".container",
    scrub: true,
    start: "0%",
    end: "60%",
    // markers: true,
    // toggleActions: "play reverse play reverse",
  },
});

paralaxEff.to("#svg", {y:-600});
// paralaxEff.to("#svg", {y:1350,x:550});
// paralaxEff.to(".box", {stagger: {amount:1}});
paralaxEff.to(".main_content", {y:200,stagger: {each:1,amount:1}});


//mouse tilt
window.addEventListener('mousemove', (e) => {
  var x = e.clientX;
  var y = e.clientY;
  var svg = document.querySelector('.box');
  
})

//svg2 animations first_page
const svgF = new TimelineMax({
  scrollTrigger: {
    trigger: ".projects",
    scrub: true,
    start: "-30%",
    end: "20%",
    // markers: true,
    // toggleActions: "play reverse play reverse",
  },
});

svgF.to("#svg2",{opacity:1})

//svg animation faq
const svgFaq = new TimelineMax({
  scrollTrigger: {
    trigger: ".gap2",
    scrub: true,
    start: "top",
    end: "80%",
    // markers: true,
    // toggleActions: "play reverse play reverse",
  },
});

// svgFaq.to("#svg2",{y:-300})
svgFaq.to("#svg2",{y:-700})

/////////////GSAP////////////
// const goodAtAnim = new TimelineMax({
//   scrollTrigger: {
//     trigger: ".first_page",
//     scrub: true,
//     start: "-30%",
//     end: "150%",
//     // pin: true,
//   },
// });

// goodAtAnim.to(".good_at", {y:200,opacity: 1,duration: 1});


/////////////GSAP-1////////////
// const abilityAnim = new TimelineMax({
//   scrollTrigger: {
//     trigger: ".first_page",
//     // scrub: true,
//     start: "0%",
//     // end: "100%",
//     pin: true,
//     pinSpacing:true,
//     toggleActions: "play reverse play reverse",
//   },
// });

// // abilityAnim.from(".good_at", {y:-300,opacity: 0});
// abilityAnim.from(".abilities h2", {opacity:0,x:200,stagger: {each:1,amount:1}});
// abilityAnim.to(".abilities h2", {stagger: {each:1,amount:1},color: "#f9813a",});

////////////TEXT-1 sliding animation gsap//////////////////////////


////////////TEXT-2 sliding animation gsap//////////////////////////
const projText = new TimelineMax({
  scrollTrigger: {
    trigger: ".projects",
    scrub: true,
    start: "-50%",
    end: "25%",
    // markers: true,
    // toggleActions: "play none play none",
    // pin: true,
  },
});

projText.from(".text1", { opacity: 0,  y: 30,stagger:{
  amount:3,
}}),
  projText.to(".text1", { opacity: 1,y:20,});

// bgColor.fromTo(".container",{backgroundColor:"#f9803a75"},{backgroundColor:"#f9813a"})
////////////TEXT-3 sliding animation gsap//////////////////////////
const crewText = new TimelineMax({
  scrollTrigger: {
    trigger: ".crew",
    scrub: true,
    start: "-50%",
    end: "5%",
    // markers: true,
    // toggleActions: "play none play none",
    // pin: true,
  },
});

crewText.from(".text2", { opacity: 0,  y: 30,stagger:{
  amount:3,
}}),
crewText.to(".text2", { opacity: 1,y:20});


////////////TEXT-4 sliding animation gsap//////////////////////////
const gapText = new TimelineMax({
  scrollTrigger: {
    trigger: ".gap2",
    scrub: true,
    start: "-50%",
    end: "5%",
    // markers: true,
    // toggleActions: "play none play none",
    // pin: true,
  },
});

gapText.from(".text3", { opacity: 0,  y: 10,stagger:{
  amount:3,
}}),
  gapText.to(".text3", { opacity: 1,y:10,});

//fade away
// headerScroll.to(".header_1", { opacity: 0, duration: 4, x: 70 });
// headerScroll.to(".header_2", { opacity: 0, duration: 4, x: 50 });
// headerScroll.to(".and", { opacity: 0, duration: 4.5, x: -50 });
// headerScroll.to(".header_3", { opacity: 0, duration: 1, x: 50 });

////SCROLLREVEAL.JS 3rd PARTY PLUGIN//////////
window.sr = new ScrollReveal();
const rightSc = {
  delay: 1,
  origin: "right",
  distance: "200px",
  duration: 2000,
  reset: true,
};

const leftSc = {
  delay: 1,
  origin: "left",
  distance: "200px",
  duration: 2000,
  reset: true,
};

const opacSc = {
  delay: 7,
  // origin: "bottom",
  scale: 1.2,
  // distance: "50px",
  duration: 4000,
  reset: true,
};

const topSc = {
  delay: 2,
  origin: "top",
  distance: "200px",
  duration: 2000,
  reset: true,
};

const bottomSc = {
  delay: 2,
  origin: "bottom",
  distance: "100px",
  duration: 2000,
  reset: true,
  // delay: 1,
  interval: 25,
};

sr.reveal(".menu", rightSc);
sr.reveal(".footer_social", topSc);
sr.reveal(".contact", opacSc);
sr.reveal(".email", rightSc);
sr.reveal(".soci", bottomSc);

// sr.reveal(".question_flex", leftSc);
// sr.reveal(".question_para", bottomSc);
// sr.reveal(".blur", scaleSc);

// sr.reveal(".proj_text2", opacity);
// sr.reveal(".proj_text3", opacity);

////////projects ANIMATION////////////////////////////

/////SECTION SNAPPING//////////////////
// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".faq .faq_sub");

//head1
// const head = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".projects",
//     ease: "none",
//     start: "top top",
//     // markers: true,
//     scrub: 1,
//     end: () => "+=" + document.querySelector(".gap2").offsetWidth / 5,
//   },
// });

// head.fromTo(".proj_text1", { opacity: 1 }, { opacity: 0, y: -500 });

// //head2
// const head2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".crew",
//     ease: "none",
//     start: "top top",
//     // markers: true,
//     scrub: 1,
//     end: () => "+=" + document.querySelector(".gap2").offsetWidth / 5,
//   },
// });

// head2.to(".proj_text2", { opacity: 0, y: -500 });

// //head3
// const head3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".gap2",
//     ease: "none",
//     start: "top top",
//     // markers: true,
//     scrub: 1,
//     end: () => "+=" + document.querySelector(".gap2").offsetWidth / 5,
//   },
// });

// head3.to(".proj_text3", { opacity: 0, y: -500 });

//get in touch icon

// // Is the same as...

// RELOAD PAGE AND THE SCROLL BAR GOES TO THE TOP
// $(document).ready(function () {
//   $(window).scrollTop(0);
// });

//////////////////////////////////
//locomotive scroll
// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth:true
// })



