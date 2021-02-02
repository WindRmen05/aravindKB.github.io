/////MEDIA QUERIES
// const navbar = document.querySelector('.navbar');
// const navi = document.querySelector('.navigation');

// const width = document.body.clientWidth;
// const height = document.body.clientHeight;
// console.log(width);

// if (width <= 2000) {
//   navbar.style.visibility = 'visible';
//   navi.style.flexDirection = 'column';
// } else {
//   navbar.style.visibility = 'hidden';
//   navi.style.flexDirection = 'row';
//   navi.style.visibility = 'visible';
// }

// //dom events
// navbar.addEventListener('click',(e) => {
//   if (e.target.className == 'nav-bar' || e.target.className == 'navbar') {
//     navi.style.visibility = 'visible';
//     const nav = new TimelineMax({onComplete:true,onReverseComplete:true});
//       nav.to('.nav-bar',{x:30,stagger:{amount:.3,from:"end"},opacity:0})
//       nav.fromTo('.navigation li',{x:30,stagger:{amount:.5,from:"start",opacity:0,duration: 1}},{opacity:1,x:0})
  
//   } else {
//   console.log('wrong');
//   }
//   console.log('working');
//   });
  
//   navi.addEventListener('click',(e) => {
//     if (e.target.id == 'span') {
//       if (width <= 800) {
//         const nav = new TimelineMax();
//       nav.to('.navigation li',{x:130,stagger:{amount:.5,from:"start"},opacity:0});
//       nav.to('.nav-bar',{x:0,stagger:{amount:.3,from:"start"},opacity:1});
//       }
//     }
//       // console.log(e.target.id);
//   });
  //------

// window.addEventListener('resize', (e) => {
//   const wid = document.body.clientWidth;
//   var limit = 800;
//   if (wid <= limit) {
//       navbar.style.visibility = 'visible';
//       navi.style.flexDirection = 'column';
//   } else {
//       navbar.style.visibility = 'hidden';
//       navi.style.flexDirection = 'row';
//   }
//   // console.log(wid);
// })

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////DOM manipulation///////////////////
const faq = document.querySelector(".question_book");

faq.addEventListener("click", (e) => {
  const target = e.target;
  const elmnt = document.querySelector(".question_para");
  if (elmnt.style.display == "none") {
    elmnt.style.display = "flex";
  } else {
    elmnt.style.display = "none";
  }
  // console.log(elmnt);
});

faq.addEventListener("mouseleave", (e) => {
  const target = e.target;
  const elmnt = document.querySelector(".question_para");
  if (elmnt.style.display == "flex") {
    elmnt.style.display = "none";
  } else {
    elmnt.style.display = "none";
  }
  // console.log(elmnt);
});