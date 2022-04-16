AOS.init();

// Wrap every letter in a span
let textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// BARBA.JS

pageTransition = () => {
  var timeline = gsap.timeline();

  timeline.to("header", {
    zIndex: 1,
  });

  timeline.to(".page-transition", {
    duration: 1,
    height: "100%",
    top: "0%",
  });

  timeline.to(".page-transition", {
    duration: 0.8,
    height: "100%",
    top: "100%",
    delay: 0.3,
  });

  timeline.set(".page-transition", {
    top: "-100%",
  });
};

mainAnimation = () => {
  var timeline = gsap.timeline();

  timeline.from(".container h1, .menu-items li, .logo", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: {
      amount: 0.4,
    },
    delay: 0.8,
  });
};

delay = (n) => {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      },

      async enter(data) {
        mainAnimation();
      },

      async once(data) {
        mainAnimation();
      },
    },
  ],
});
// barba.init({
//   transitions: [
//     {
//       name: "opacity-transition",
//       leave(data) {
//         return gsap.to(data.current.container, {
//           opacity: 0,
//         });
//       },
//       enter(data) {
//         return gsap.from(data.next.container, {
//           opacity: 0,
//         });
//       },
//     },
//   ],
// });

// let date = new Date("Feb 15 2020");
let day = new Date().toLocaleDateString("en-us", { day: "numeric" });
let month = new Date().toLocaleDateString("en-us", { month: "long" });
let year = new Date().toLocaleDateString("en-us", { year: "numeric" });
const date = `${month} ${day}, ${year}`;
document.querySelector("#date").innerHTML = date;
