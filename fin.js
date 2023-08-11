

gsap.to(".container-section6", {delay:2,duration:10, y:-1200,  });
const monstruoNegro = document.querySelector('.monstruo-negro-fin')

function createMonster() {
    const blobMonstruo = document.createElement("div");
    blobMonstruo.classList.add("blobMonstruoFin");
    blobMonstruo.style.left = `${Math.random() * 110 + 3}%`;
    blobMonstruo.style.width = `${Math.random() * 40 + 1}%`;
    blobMonstruo.style.setProperty('--blob-monstruo-top', `${Math.random() * 90}%`);
  
    monstruoNegro.appendChild(blobMonstruo);
    setTimeout(() => {
      blobMonstruo.remove()
    }, 1200)
  }

let tlmonstruos = new TimelineMax();

tlmonstruos.to(".presentacion-monstruo-miedoso", {
    delay:10,
    opacity:1,
    duration:2,
     ease: "power.in"
   }, ">")

   .to("#monstruo", {
  opacity:1,
  duration:3,
    ease: "power.in"
  }, "<")
.to(".iris-monstruo", {
    duration: 2,
    x: 2,
    ease: "power.in"
  }, "<")

  .to(".iris-monstruo", {
    duration: .2,
    x: 0,
    stagger: .1,
    ease: "bounce.out"
  }, "<+=2")


  .to("#brazoIzq", {
    transformOrigin: "top",
    duration: .2,
    rotation: -3,
    ease: "power.in"
  }, "<")
  .to("#brazoIzq", {
    transformOrigin: "top",
    duration: .2,
    rotation: 10,
    ease: "power.in"
  }, ">")

  .to(".presentacion-monstruo-negro", {
   opacity:1,
   duration:2,
    ease: "power.in"
  }, ">")
 
  .add(() => { setInterval(createMonster, 50) },)




  .to("#brazoIzq", {
    transformOrigin: "top",
    duration: .2,
    rotation: -80,
    ease: "power.in"
  }, ">")

  .to("#brazoDer", {
    transformOrigin: "top",
    x: 2,
    duration: .2,
    rotation: 80,
    ease: "power.in"
  }, "<")

  .to("#ojosDer", {
    rotation: 4,
    ease: "power.in"
  }, "<")

  .to("#ojosIzq", {
    rotation: -4,
    ease: "power.in"
  }, "<")
  .to("#bocaCerrada", {
    duration: 0,
    opacity: 0
  }, "<")

  .to("#bocaAbierta", {
    duration: 0,
    opacity: 1
  }, "<")

  .to(".peloIzq", {
    transformOrigin: "bottom bottom",
    y: () => (Math.floor(Math.random() * 40)) * -1,
    x: () => Math.floor(Math.random() * 40),
    duration: .2,
    rotation: 10,
    ease: "power.in",
    // stagger:.5
  }, "<")
  .to(".peloDer", {
    transformOrigin: "bottom bottom",
    y: () => (Math.floor(Math.random() * 40)) * -1,
    x: () => (Math.floor(Math.random() * 40)) * -1,
    duration: .2,
    rotation: 10,
    ease: "power.in",
    //stagger:.5
  }, "<")

  //
 
  .to("#brazoIzq", {
    delay: 5,
    transformOrigin: "top",
    duration: .2,
    rotation: 0,
    ease: "power.in"
  }, "<")

  .to("#brazoDer", {
    transformOrigin: "top",
    x: 0,
    duration: .2,
    rotation: 0,
    ease: "power.in"
  }, "<")

  .to("#bocaAbierta", {
    duration: 0,
    opacity: 0
  }, "<")

  .to("#bocaKe", {
    duration: 0,
    opacity: 1
  }, "<")

  .to(".peloIzq", {
    y: 0,
    x: 0,
    duration: .2,
    rotation: 10,
    ease: "power.in",
  }, "<")
  .to(".peloDer", {
    y: 0,
    x: 0,
    duration: .2,
    rotation: 10,
    ease: "power.in",

  }, "<")
  ///

  .to("#brazoDer", {
    transformOrigin: "top",
    duration: .2,
    rotation: 20,
    ease: "power.in"
  }, "<")
  .to(".container-section6", {duration:10, y:-2000,  });


