
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const path4467 = document.querySelector("#path4467");
const path285 = document.querySelector("#path285");
const bola1 = document.querySelector(".bola");
const bola2 = document.querySelector("#bola2");
const bola3 = document.querySelector(".bola3");
const contanimacion = document.querySelector(".ojo__cont");
const iris = document.querySelector(".ojo__iris");
const avisoScroll = document.querySelector(".avisoScroll");
const buttoninicio = document.getElementById("buttonstart");
buttoninicio.addEventListener("click", heightsection3);
buttoninicio.addEventListener("click", startAnimation);
buttoninicio.addEventListener("click", mouseojo);
buttoninicio.addEventListener("click", enableTimeline);

function heightsection3() {
  let section3Element = document.querySelector(".section3");
  section3Element.classList.add("heightsection3");

}

function startAnimation() {
  let delayedCall;
  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: self => {
      const velocity = self.getVelocity();
      if (velocity > 1) {
        gsap.to('.avisoScroll', { opacity: 0 })
      } else if (velocity < -1) {
        gsap.to('.avisoScroll', { opacity: 0 })
      }
      if (delayedCall)
        delayedCall.kill();
      delayedCall = gsap.delayedCall(1, () => gsap.to('.avisoScroll', { opacity: 1 }),
        gsap.fromTo('.avisoScroll', { y: 10 }, { y: 0, repeat: -1, yoyo: true, duration: 1, ease: "power.out" }));
    }
  });
  contanimacion.classList.add("animatecont");
  iris.classList.add("animateiris");
}

function mouseojo() {
  document.addEventListener("mousemove", updateMousePos);
}

let midWidth = Math.floor(section1.offsetWidth / 2);
let midHeight = Math.floor(section1.offsetHeight / 2);
let mousePos = {
  x: midWidth,
  y: midHeight
};

function updateMousePos(event) {
  if (section1.contains(event.target)) {
    mousePos.x = event.clientX - section1.offsetLeft;
    mousePos.y = event.clientY - section1.offsetTop;
    transX = mousePos.x - midWidth;
    transY = mousePos.y - midHeight;
    let skewX = 0;
    if (transX > -30 && transX < 30 && transY < 0) {
      skewX = transX / 2;
    } else if (transX > -30 && transX < 30 && transY >= 0) {
      skewX = -(transX / 2);
    } else if (transX > 30) {
      skewX = -(transY / 2);
    } else if (transX < -30) {
      skewX = transY / 2;
    }
    if (transX >= 40) {
      transX = 40;
    } else if (transX <= -40) {
      transX = -40;
    }
    if (transY >= 10) {
      transY = 10;
    } else if (transY <= -20) {
      transY = -20;
    }

    if (skewX >= 15) {
      skewX = 15;
    } else if (skewX <= -15) {
      skewX = -15;
    }
    iris.style.transform = "translateX(" + transX + "px) translateY(" + transY + "px) skewX(" + skewX + "deg) skewY(2deg)";
    let irisRect = iris.getBoundingClientRect();
    let irisLeft = irisRect.left + window.scrollX;
    let irisTop = irisRect.top + window.scrollY;
    bola1.style.left = irisLeft + 30 + "px";
    bola1.style.top = irisTop + 30 + "px";
    bola1.style.transform = "skewX(" + skewX + "deg) skewY(2deg)";
  }
}

function stopUpdateMousePos() {
  document.removeEventListener("mousemove", updateMousePos);
}

function enableTimeline() {
  tlInicio = gsap.timeline({
    scrollTrigger: {
      // markers: { startColor: "green", endColor: "green", fontSize: "18px", fontWeight: "bold", indent: 20 },
      scrub: 2,
      trigger: ".section1",
      start: "top top",
      end: "+=200",
      invalidateOnRefresh: true,
      pin: false,
    }
  })

    .from(".bola", {
      backgroundColor: "black",
      backdropFilter: "invert(0) grayscale(0)",
    })
    .to(".btn-container", {
      opacity: 0,
      zIndex: 0,
    }, "<")
    .to(".cortinaDer", {
      x: 350,
      rotate: -10,
      height: "120vh",
      ease: Power1.easeIn,
      duration: 10
    }, "<")
    .to(".cortinaIzq", {
      x: -350,
      rotate: 10,
      height: "120vh",
      duration: 10,
      ease: Power1.easeIn,
    }, "<")


    .add(stopUpdateMousePos)
    .to(".bola", {
      y: () => {
        let section2 = document.querySelector(".section2");
        let section2Rect = section2.getBoundingClientRect();
        let section2Top = section2Rect.top + window.scrollY;
        let bola1 = document.querySelector(".bola");
        let bola1Rect = bola1.getBoundingClientRect();
        let bola1Bottom = bola1Rect.bottom + window.scrollY;
        deltaY = section2Top - bola1Bottom
        return deltaY
      },
      backgroundColor: "transparent",
      backdropFilter: "invert(1) grayscale(1)",
      transform: "skew(0deg)",
      duration: 25,
      ease: "bounce.out",
    }, "<")

    .to(".bola", {
      opacity: 1,
      duration: 0.005,
    }, "<")
    .to(".section2", {
      backgroundColor: "black",
      duration: .005,
      ease: "none",
    }, "<+=7.3")

    .to(".seccion1__marco", {
      filter: "grayscale(1)",
      duration: .005,
      ease: "none",
    }, "<")
    .to(".ojo__int", {
      display: "none",
      duration: 5,
    }, "<")
    .to(".bola", {
      scale: 1.2,
      ease: "custom",
      x: 10,
      ease: "Elastic.(2, 0.80)",
      duration: 15,
    },)
  CustomEase.create("custom", " M0,0 C0.051,0.154 0.578,-0.047 0.638,0.074 0.72,0.243 0.813,0.785 0.818,0.79 0.908,0.96 0.971,1 1,1 ")
  tlInicio.to(".bola", {
    scale: 1.5,
    ease: "custom",
    y: 650,
    duration: 10,
  }, "-=10")
    .to(".bola", {
      y: 380,
      duration: 10,
    },)


  tlheight = gsap.timeline({
    scrollTrigger: {
      //   markers: { startColor: "violet", endColor: "violet", fontSize: "18px", fontWeight: "bold", indent: 20 },
      scrub: 1,
      trigger: ".ojo",
      start: "-50% top",
      end: "50% top",
      invalidateOnRefresh: true,
      force3D: true,
      once: true,
      toggleActions: "play none none none",
    }
  })
    .to(".divAncho", {
      height: "100vh",
    },)
    .to(".amarillo", {
      height: "100vh",
    },)
    .to(".section3", {
      height: "100vh",
    },)
    .to(".blob-wrapper", {
      height: "1500px",
    },)
    .to(".text--oscuridad", {
      height: "auto",
    },)
    .to(".content__text", {
      height: "auto",
    },)
    .add(tlSection3)

}



let boolfoco = false;
function transitionBolaAluz() {
  if (boolfoco === true) {
    return tlSection3.to(".bola2", { y: 600, boxShadow: "0 0 40px 20px #fff, 0 0 100px 50px #ff0", height: "28px", width: "28px", backdropFilter: "invert(1) grayscale(1) ", borderRadius: "100%", duration: .5, },)
  }
}
let lightSwitch = document.querySelector('#switch');
lightSwitch.addEventListener("click", agrandarFoco)
function agrandarFoco() {
  console.log("Aca")
  shadowSmall = document.querySelector('#shadow'),
    shadowLarge = document.querySelector('#shadow-large');
  if (boolfoco === false) {
    let tlfoco = gsap.timeline({

    })
    tlfoco.to(".section3__C", { opacity: 1 })
    tlfoco.to(".textoFoco2", { duration: .1, opacity: 1, filter: "blur(0px)", ease: "power3.in", });
    tlfoco.to(".textoFoco1", { duration: .1, opacity: 0, filter: "blur(50px)", ease: "power3.in", });
    tlfoco.to(lightSwitch, 0.2, { y: '+=35', ease: Power1.easeInOut }, "<");
    tlfoco.to(shadowSmall, 0.2, { y: '+=3', ease: Power1.easeInOut }, "<");
    tlfoco.to(shadowLarge, 0.2, { y: '-=3', ease: Power1.easeInOut }, "<");
    tlfoco.to(".section4", { duration: 0, height: "200vh", },)
    tlfoco.to(".fondoBoca", { duration: .1, height: "100vh", },)
    tlfoco.to(".bola2", { duration: .5, "--circle": "100vmax" })
    tlfoco.to(".bola2", { duration: 2, backdropFilter: "invert(0) grayscale(0) " }, "<")

    let tlFocoaBola = gsap.timeline({
      scrollTrigger: {
        // markers: { startColor: "blue", endColor: "blue", fontSize: "18px", fontWeight: "bold", indent: 20 },
        scrub: 2,
        trigger: ".section3__B",
        start: "+=1799",
        end: "+=1790",
        invalidateOnRefresh: true,
        pin: false,
      }
    })
  
    tlFocoaBola.to("#bola2", { height: "28px", width: "28px", background: "black", borderRadius: "100%", y: 200, x: 500 },)
      .to("#bola2", {
        y: 1100,
        x: 350,
        scale: .5
      })
      .to("#bola2", {
        opacity: 0
      })


    return boolfoco = true
  } else {
    let tlfoco = gsap.timeline()
    tlfoco.to(".section3__C", { opacity: 0 });
    tlfoco.to(".divAncho", { duration: .1, opacity: 1, backgroundColor: "black", });
    tlfoco.to(lightSwitch, 0.2, { y: '-=35', ease: Power1.easeInOut }, "<");
    tlfoco.to(shadowSmall, 0.2, { y: '-=3', ease: Power1.easeInOut }, "<");
    tlfoco.to(shadowLarge, 0.2, { y: '+=3', ease: Power1.easeInOut }, "<");
    tlfoco.to(".section4", { duration: .1, height: "0vh", },)
    tlfoco.to(".fondoBoca", { duration: .1, height: "0vh", },)
    tlfoco.to(".bola2", { duration: 2, "--circle": "10vmax" });
    tlfoco.to(".textoFoco2", { duration: .1, opacity: 0, filter: "blur(50px)", ease: "power3.in", });
    tlfoco.to(".textoFoco1", { duration: .1, opacity: 1, filter: "blur(0px)", ease: "power3.in", });
    tlfoco.to(".bola2", { duration: 2, backdropFilter: "invert(1) grayscale(1) " }, "<")
    return boolfoco = false

  }
}



const blobWrapper = document.querySelector('.blob-wrapper')
/* 
  const timer = ms => new Promise(res => setTimeout(res, ms))
  async */
function createDivs(self) {
  for (let i = 0; i < 80; i++) {
    const blob = document.createElement("div");
    blob.classList.add("blob");
    blob.style.left = `${Math.random() * 101}%`;
    blob.style.width = `${Math.random() * 25}%`
    blob.style.setProperty('--blob-top', `${Math.random() * 70 + 1}%`);
    blob.style.setProperty('--blob-size', `${Math.random() * 20}%`);
    blobWrapper.appendChild(blob);
    /* await timer(0);
    setTimeout(() => {
      blob.remove()
    }, 10000) */
  }
}


const divAncho = document.querySelector(".divAncho");

function getScrollAmountDivAncho() {
  let divAnchoWidth = divAncho.scrollWidth;
  return -(divAnchoWidth - window.innerWidth);
}

/*---tlSection3---*/


function luz() {
  document.addEventListener('mousemove', luzUpdate)
  document.addEventListener('touchmove', luzUpdate)
}
function luzUpdate(e) {
  let x = e.clientX || e.touches[0].clientY
  let y = e.clientY || e.touches[0].clientY
  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

bola2.addEventListener("click", bola2Foco);
function bola2Foco() {
  let tlbolaaluz = gsap.timeline({
  })
  tlbolaaluz.to(".bola2", { rotate: 0, duration: 0, pointerEvents: "none" })
    .to("#bola2", { duration: 0, backdropFilter: "invert(0) grayscale(1) " }, "<")
    .to(".click", { opacity: 0 })
    .to("#bola2", { duration: 0, background: "radial-gradient(circle var(--circle) at var(--cursorX) var(--cursorY), rgba(255, 255, 255, .2) 60%, rgba(255, 255, 0, .5) 80%,rgba(0, 0, 0, 0.99) 100%)" },)
    .to("#bola2", { transformOrigin: "50% 50%", width: "100%", height: "100%", ease: "power2.in", duration: .5 })
    .to("#bola2", { scale: 1, left: (() => { bola2.style.left = 0 + "px"; }), top: (() => { bola2.style.top = 0 + "px"; }), x: 0, y: 0, borderRadius: "0%" })
    .to("#bola2", { duration: .5, "--circle": "15vmax", })
    .to(".seccion3__tapa", { duration: 0, opacity: 0, },)
}
createDivs()
function bolaOverlay() {
  let bola1Rect = bola1.getBoundingClientRect();
  let bola1Left = bola1Rect.left + window.scrollX;
  let bola1Top = bola1Rect.top + window.scrollY;
  let bola2Rect = bola2.getBoundingClientRect();
  let bola2Left = bola2Rect.left + window.scrollX;
  let bola2Top = bola2Rect.top + window.scrollY;
  deltaxbola = bola1Left - bola2Left
  deltaybola = bola1Top - bola2Top
  bola2.style.left = deltaxbola + "px";
  bola2.style.top = deltaybola + "px";
};

function tlSection3() {
  let tlSection3 = gsap.timeline({
    scrollTrigger: {
      //   markers: { startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20 },
      trigger: ".wrapwrapper",
      start: "top top ",
      end: () => `+=${getScrollAmountDivAncho() * -8}`,
      pin: true,
      pinSpacing: true,
      scrub: 3,
      force3D: true
    }
  })

    bolaOverlay()
  tlSection3.to(".blob", {
    duration: 30, y: () => { let caida = `${Math.random() * 1000 + 1}`; return caida }, scale: () => { let escala = `${Math.random()}`; return escala }, ease:
      Back.easeOut.config(2),
  })

    .to(".bola1", {
      opacity: 1,
      duration: 0,
    }, "<")

    .to(".bola2", {
      opacity: 0,
      duration: 0,
    }, "<")
    .to(".bola1", {
      opacity: 0,
      duration: 0,
    }, "<")
    .to(".bola2", {
      opacity: 1,
      duration: 0,
    }, "<")
  tlSection3.fromTo(".bola2", {
    scale: 1.5,
  }, { scale: 1, duration: 7, yoyo: true, repeat: 3 }, { scale: 1 }, {
    scale: .5
  })
    .to('.bola2', {
      rotate: -360,
      transformOrigin: "180% 0%",
      y: () => {
        let caminovg = document.querySelector("#path4467");
        let caminovgRect = caminovg.getBoundingClientRect();
        let caminovgTop = caminovgRect.top;
        let bola2Element = document.querySelector(".bola2");
        let bola2ElementRect = bola2Element.getBoundingClientRect();
        let bola2ElementTop = (bola2ElementRect.top) + 14;
        pathDeltaY = caminovgTop - bola2ElementTop
        return pathDeltaY
      },
      x: () => {
        let caminosvg = document.querySelector("#path4467");
        let caminosvgRect = caminosvg.getBoundingClientRect();
        let caminosvgRight = caminosvgRect.left;
        let caminosvgWidth = caminosvgRect.width
        let bola2ElementRect = bola2.getBoundingClientRect();
        let bola2ElementRight = (bola2ElementRect.right - 14);
        pathDeltaX = (caminosvgRight - (caminosvgWidth / 2)) * -1
        return pathDeltaX
      },
      ease: "Bounce. easeIn",
      duration: 12,
    }, "<")

    .to('.bola2', {
      transformOrigin: " center center",
      duration: 50,
      motionPath: {
        curviness: 1.5,
        path: '#path4467',
        align: '#path4467',
        alignOrigin: [0.5, 0.5]
      },
      ease: "bounce.out",
    }, "<+=10.5")
    .to(".blob", {
      duration: 20, scale: 2,
    },)

    .to(".blob", {
      ease: "bounce.out",
      duration: 10,
    },)

    .to(".blob-wrapper", {
      opacity: 1,
      duration: 20,
      delay: 0
    }, "<")

    .to(".text--oscuridad", {
      opacity: 0,
      ease: "bounce.out",
      duration: 5,
    }, "<")
    .to(".text--oscuridad", {
      filter: "invert(50%)",
      duration: 10,
    }, "<")
    .to(".text--oscuridad", {
      filter: "invert(0%)",
      duration: 0,
    })

    .to(".luz", {
      filter: "invert(0%)",
      opacity: 0,
      duration: 1,
    }, "<")
    .to(".text--oscuridad", {
      opacity: 1,
      duration: 8,
    })
    .to(".text--oscuridad", {
      filter: "invert(100%)",
      duration: 0,
    }, "<")
    .to(".bola2", {
      scale: 2,
      duration: 4,
    }, "<")

    .to(".bola2", {
      //backgroundColor: " #f9f9f9",
      boxShadow: "0 0 40px 20px #fff, 0 0 100px 50px #ff0",
      duration: 8,
    }, "<")

    .to(".wrapperText1", {
      opacity: 1,
      duration: 20,
    }, "<")
    .to(".wrapperText2", {
      opacity: 1,
      duration: 20,
    }, "<")
    .to(".wrapperText3", {
      opacity: 1,
      duration: 20,
    }, "<")
    .add(luz)
    .to(".bola2", {
      // backgroundColor: " #f9f9f9",
      boxShadow: "none",
    })
    .to(".text--oscuridad", {
      opacity: 0,
      ease: "bounce.out",
      duration: 5,
    })
    .to(".luz", {
      duration: 10,
    },)
    .to(".blob", {
      backgroundColor: "white",
      duration: 20,
    },)
    .to(".bola2", {
      backgroundColor: "transaprent",
      background: "transaprent"
    },)
    .to(".bola2", { height: "28px", width: "28px", borderRadius: "100%" }, "<")

  tlSection3.to(".click", {
    opacity: 0,
    duration: 0,
  },)
  tlSection3.to(".divAncho", {
    x: "-10vw",
    duration: 20,
    ease: "none",
  }, "<")
    .to(".click", {
      delay:20,
      opacity: 1,
    },"<")
    .to(".click", {
      duration: 20,
      rotate: 360,
    },"<")
    .to(".bola2", {
      pointerEvents: "auto",
      keyframes: {
        scale: [1.5, 2, 1, 2, 1, 2],
        easeEach: 'sine.inOut',
        ease: 'expo.out',
        duration: 30,
      },
      duration: 20,
    }, "<")
 

  tlSection3.to(".divAncho", {
    x: "-90vw",
    duration: 20,
    ease: "none",
  })
    .to(".text--oscuridad", {
      opacity: 0,
      ease: "bounce.out",
      duration: 5,
    })
    .to(".divAncho", {
      x: "-200vw",
      duration: 10,
      ease: "none",
    })

    .add(transitionBolaAluz)

    .to(".section3__B", {
      duration: 20,
    })
    .to("#wave", {
      duration: 10, x: 200,
    }, "<")
    .to(".section3__B", {
      transformOrigin: "bottom rigth",
      x: -700,
      y: -200,
      rotate: -60,
      duration: 30,
    })
    .to(".fondoBoca", {
      opacity: 1,
    }, "<")
    .fromTo(".section3__C_texto", {
      y: -300,
    }, {
      y: 800,
      opacity: 0,
      duration: 30,
    }, "<")
    .to("#wave", {
      duration: 10, x: 400,
    }, "<")
    .to(".section2__marco", {
      overflow: "visible",
    }, "<")
    .add(fondoBocaAnim)
    .to('.bola1', {
      opacity: 0,
    },)



}

/*---SECTION4---*/

function tlForm() {
  let tlForm = gsap.timeline({})
    .to('.clickForm', {
      opacity: 0,
      duration: 0
    },)
    .to(".form", {
      width: "50%",
      height: "50%",
      ease: "bounce.out",
      duration: 2,
    },)
    .to(".bola3", {
      scale: 2,
      borderRadius: 0
    }, "<")

    .to(".bola3", {
      opacity: 0,
      duration: 0
    },)
    .to(".form", {
      duration: 1,
      backgroundColor: " rgba(158, 189, 199,.8)",

    }, "<")

    .to(".comment", {
      opacity: 1,
      duration: .1,
    },)

    .to(".input", {
      width: "60%",
      height: "70%",
      duration: .1,
      opacity: 1,

    }, "<")

    .to("#btnForm", {
      opacity: 1,
      duration: .5,
    }, "<")
}

bola3.addEventListener("click", tlForm);
function fondoBocaAnim() {

  let tlSection4 = gsap.timeline({
    scrollTrigger: {
     // markers: { startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20 },
      trigger: ".fondoBoca",
      start: "top bottom",
      end: "bottom bottom",
      scrub: .5,
    }
  })
    .to('.bola3', {
      opacity: 1,
      duration: 0
    },)
    .to(".bola3", {
      keyframes: {
        scale: [.5, 1.5, 1],
        easeEach: 'sine.inOut',
        ease: 'bounce.out',
      },
      duration: 40,
    }, "<")
    .to('.bola3', {
      opacity: 1,
      duration: 40,
      motionPath: {
        path: '#path285',
        align: '#path285'
      },
   
    }, "<")
    .to('.clickForm', {
      opacity: 1,
      duration: 0
    },)





  var tl = new TimelineMax({ repeat: -1 })
    .staggerFromTo('.circle', 4, { y: 50, scale: 0, }, { y: 50, scale: 6, stagger: { repeat: -1, repeatDelay: -1, amount: 3 } }, 5);}
document.getElementById("btnForm").addEventListener("click", submitBoca);
function submitBoca() {
  const circ = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
  const end = "M0 200 Q200 200 400 200";
  const endBoca = "M 462,200 C 391.12367,264.8321 138.92056,253.247342 62,200 L 61.953317,28.710074 463.39066,26.695332 Z"
  const endBocaAbajo = "m 462,26.15465 c -30.87633,-45.1679 -323.07944,-86.75266 -400,0 l -0.04668,171.28993 401.437343,2.01474 z"
  const endBocaAbajo2 = "m 462,26.15465 c -45.87633,-45.1679 -383.07944,-86.75266 -400,0 l -0.04668,171.28993 401.437343,2.01474 z"
  const endBocaAbajo3 = "m 462,26.15465 c -45.87633,-65.1679 -383.07944,-86.75266 -400,0 l -0.04668,171.28993 401.437343,2.01474 z"
  const endDiente = "m 94.619162,12.15956 27.702698,-44.75429 1.00738,49.36117 z"
  const endDiente2 = "m 104.619162,2.15956 27.702698,-44.75429 1.00738,49.36117 z"
  gsap.to("#elastico", { repeat: -1, repeatDelay: 1, duration: 1, attr: { d: end }, ease: "elastic(5, 0.2)" });
  gsap.to("#boca", { y: -50 });
  gsap.to("#boca", { delay: 2, y: -0, duration: 2, ease: "none" });
  gsap.to("#boca", { delay: 2, y: 10, duration: 2, attr: { d: endBoca }, ease: "elastic(1, 0.8)" });
  gsap.to("#bocaAbajo", { y: 50, duration: 2 });
  gsap.to("#bocaAbajo", { delay: 2, y: 0, duration: .5, ease: "none" });
  gsap.to("#bocaAbajo", { delay: 2, duration: 2, attr: { d: endBocaAbajo }, ease: "elastic(1, .3)" });
  gsap.to("#diente", { y: 50, duration: 2 });
  gsap.to("#diente", { delay: 2, y: 0, duration: .5, ease: "none" });
  gsap.to("#diente", { delay: 2, duration: 2, attr: { d: endDiente }, ease: "elastic(1, .3))" });
  gsap.to("#bocaAbajo", { delay: 4, duration: 1, attr: { d: endBocaAbajo2 }, ease: "elastic(1, .3)" });
  gsap.to("#diente", { delay: 4, duration: 2, attr: { d: endDiente2 }, ease: "elastic(1, .3))" });
  gsap.to("#bocaAbajo", { delay: 4.2, duration: 1, attr: { d: endBocaAbajo3 }, ease: "elastic(2, .3)" });
}
