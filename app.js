function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveAnimation();

let h5Timer = document.querySelector(".line1-part1 h5");
let grow = 0;
setInterval(() => {
  if (grow < 100) {
    grow++;
    h5Timer.innerText = grow;
  } else {
    grow = 100;
  }
}, 30);
gsap.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.2,
});
gsap.from(".loader-now", {
  opacity: 0,
  duration: 0.5,
  delay: 1.05,
});
let tl = gsap.timeline();
tl.to(".loader-now", {
  opacity: 1,
  duration: 0.3,
  delay: "1",
  animationName: "anime",
});
tl.from(".wait-instruc", {
  opacity: 0,
  delay: 0.05,
  duration: 1,
});

tl.to(
  ".loader",
  {
    yPercent: -100,
    duration: 1.5,
    delay: 1.8,
  },
  "a"
);
tl.to(
  ".loader",
  {
    opacity: 0,
    duration: 1.5,
    delay: 1.8,
  },
  "a"
);
tl.from(
  ".hero h1",
  {
    y: 150,
    delay: -0.8,
    stagger: 0.2,
  },
  "b"
);
tl.from(
  ".nav-part2 h3",
  {
    opacity: 0,
    delay: -0.8,
    stagger: 0.2,
  },
  "b"
);
tl.to(".loader", {
  delay: 0,
  display: "none",
});

let flagCon = document.querySelector("#con");
flagCon.addEventListener("mousemove", (e) => {
  document.querySelector("#flag").style.display = "inline-block";
  let rectForFlagcon = flagCon.getBoundingClientRect();
  gsap.to("#flag", {
    left: e.x - rectForFlagcon.left,
    top: e.y - rectForFlagcon.top,
  });
});
flagCon.addEventListener("mouseleave", () => {
  document.querySelector("#flag").style.display = "none";
});
function scrollAnimation() {
  Shery.makeMagnet(".nav-part2 h3 , .magnet", {});
  let tl1 = gsap.timeline();
  tl1.from(".scroll-page1 p", {
    y: 20,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
  });
  // tl1.from(".scroll p", {
  //   y: 0,
  //   yoyo: false,
  // });
  tl1.from(".scroll-page1 p", {
    y: -20,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
  });
}
scrollAnimation();

function page2ScrollAnimation() {
  let videoCon = document.querySelector(".page2-video-con");
  let video = document.querySelector(".page2-video-con video");
  let flag = 0;
  video.addEventListener("click", function (e) {
    if (flag === 0) {
      video.play();
      video.volume = 0.3;
      video.style.opacity = 1;
      document.querySelector(".video-cursor").innerHTML =
        "<i class='ri-pause-line'></i>";
      gsap.to(".video-cursor", {
        scale: 0.7,
      });
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      document.querySelector(".video-cursor").innerHTML =
        "<i class='ri-play-fill'></i>";
      gsap.to(".video-cursor", {
        scale: 1,
      });
      flag = 0;
    }
  });
  videoCon.addEventListener("mouseenter", () => {
    gsap.to(".mousefollower", {
      opacity: 0,
    });
    videoCon.addEventListener("mousemove", (e) => {
      let rectPage2 = videoCon.getBoundingClientRect();
      gsap.to(".video-cursor", {
        left: e.x - rectPage2.left,
        top: e.y - rectPage2.top,
      });
    });
  });
  videoCon.addEventListener("mouseleave", () => {
    gsap.to(".mousefollower", {
      opacity: 1,
    });
    gsap.to(".video-cursor", {
      left: "70%",
      top: "8%",
    });
  });
}
page2ScrollAnimation();

//      page 3
gsap.from(".page3-projects h1", {
  y: 200,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3-projects",
    // markers: true,
    // scrub: 2,
    start: "top 78%",
    end: "top 70%",
  },
});

gsap.from(".inner-anima-line", {
  xPercent: 110,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".inner-anima-line",
    // markers: true,
    // scrub: 2,
    start: "top 86%",
    end: "top 74%",
  },
});
function page3ProjectLineAnimation() {
  gsap.from(".inner-anima-line-pro-1", {
    xPercent: 110,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".inner-anima-line-pro-1",
      // markers: true,
      scrub: 2,
      start: "top 98%",
      end: "top 98%",
    },
  });
  gsap.from(".inner-anima-line-pro-2", {
    xPercent: 110,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".inner-anima-line-pro-2",
      // markers: true,
      scrub: 2,
      start: "top 98%",
      end: "top 98%",
    },
  });
  gsap.from(".inner-anima-line-pro-3", {
    xPercent: 110,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".inner-anima-line-pro-3",
      // markers: true,
      scrub: 2,
      start: "top 98%",
      end: "top 98%",
    },
  });
  gsap.from(".inner-anima-line-pro-4", {
    xPercent: 110,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".inner-anima-line-pro-4",
      // markers: true,
      scrub: 2,
      start: "top 98%",
      end: "top 98%",
    },
  });
  gsap.from(".inner-anima-line-pro-5", {
    xPercent: 110,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".inner-anima-line-pro-5",
      // markers: true,
      scrub: 2,
      start: "top 98%",
      end: "top 98%",
    },
  });
  gsap.from(".inner-anima-line-pro-6", {
    xPercent: 110,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".inner-anima-line-pro-6",
      // markers: true,
      scrub: 2,
      start: "top 98%",
      end: "top 98%",
    },
  });
}
page3ProjectLineAnimation();
function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.94, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749691738595 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.15, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.53, range: [0, 10] },
      metaball: { value: 0.46, range: [0, 2] },
      discard_threshold: { value: 0.73, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.49, range: [0, 2] },
      noise_scale: { value: 12.98, range: [0, 100] },
    },
    gooey: true,
  });
  Shery.imageEffect(".image-div-2", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.94, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749691738595 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.15, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.53, range: [0, 10] },
      metaball: { value: 0.46, range: [0, 2] },
      discard_threshold: { value: 0.73, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.49, range: [0, 2] },
      noise_scale: { value: 12.98, range: [0, 100] },
    },
    gooey: true,
  });
  Shery.imageEffect(".image-div-3", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.94, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749691738595 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.15, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.53, range: [0, 10] },
      metaball: { value: 0.46, range: [0, 2] },
      discard_threshold: { value: 0.73, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.49, range: [0, 2] },
      noise_scale: { value: 12.98, range: [0, 100] },
    },
    gooey: true,
  });
  Shery.imageEffect(".image-div-4", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.94, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749691738595 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.15, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.53, range: [0, 10] },
      metaball: { value: 0.46, range: [0, 2] },
      discard_threshold: { value: 0.73, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.49, range: [0, 2] },
      noise_scale: { value: 12.98, range: [0, 100] },
    },
    gooey: true,
  });
  Shery.imageEffect(".image-div-5", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.94, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749691738595 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.15, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.53, range: [0, 10] },
      metaball: { value: 0.46, range: [0, 2] },
      discard_threshold: { value: 0.73, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.49, range: [0, 2] },
      noise_scale: { value: 12.98, range: [0, 100] },
    },
    gooey: true,
  });
  Shery.imageEffect(".image-div-6", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.94, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749691738595 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.15, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.53, range: [0, 10] },
      metaball: { value: 0.46, range: [0, 2] },
      discard_threshold: { value: 0.73, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.49, range: [0, 2] },
      noise_scale: { value: 12.98, range: [0, 100] },
    },
    gooey: true,
  });
}

function checkWidth() {
  if (window.innerWidth > 600) {
    sheryAnimation();
  }
}

// window.addEventListener("resize", checkWidth);
// window.addEventListener("load", checkWidth);
checkWidth();
//            page4

gsap.from(".page4-projects h1", {
  y: 200,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page4-projects",
    // markers: true,
    // scrub: 2,
    start: "top 78%",
    end: "top 70%",
  },
});

gsap.from(".inner-anima-line-4", {
  xPercent: 110,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".inner-anima-line-4",
    // markers: true,
    // scrub: 2,
    start: "top 86%",
    end: "top 74%",
  },
});

gsap.from(".description-overflow h1", {
  y: 200,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".description-overflow",
    // markers: true,
    scrub: 2,
    start: "top 90%",
    end: "top 70%",
  },
});

gsap.from(".page4-mid span h3", {
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page4-mid span h3",
    // markers: true,
    scrub: 2,
    start: "top 81%",
    end: "top 70%",
  },
});

gsap.from(".inner-anima-line-4-end", {
  xPercent: 110,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".inner-anima-line-4-end",
    // markers: true,
    // scrub: 2,
    start: "top 90%",
    end: "top 74%",
  },
});

//          footer

gsap.from(".footer-top h1", {
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".footer-top h1",
    // markers: true,
    // scrub: 2,
    start: "top 81%",
    end: "top 70%",
  },
});

gsap.from(".inner-anima-line-footer", {
  xPercent: 110,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".inner-anima-line-footer",
    // markers: true,
    // scrub: 2,
    start: "top 90%",
    end: "top 74%",
  },
});
gsap.from(".inner-anima-line-footer-2", {
  xPercent: 110,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".inner-anima-line-footer-2",
    // markers: true,
    // scrub: 2,
    start: "top 102%",
    end: "top 74%",
  },
});
Shery.mouseFollower({
  //Parameters are optional.
  skew: false,
  // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: -0.5,
  // delay: 0.4,
});
