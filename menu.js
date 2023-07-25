
/* function heightsection3() {
    let section3Element = document.querySelector(".section3");
    section3Element.classList.add("heightsection3");
  } */
let toggle = document.querySelector(".hamb");
let boolmenu = false;
let tlmenu = gsap.timeline()



toggle.addEventListener("click", hamburguer)
function hamburguer() {
  if (boolmenu === false) {
    gsap.to(".bar1", { duration: .2, width: "45px", height: "4px", top: "50%", left: "45%", rotate: "45deg" })
    gsap.to(".bar2", { duration: .2, width: "2px", })
    gsap.to(".bar3", { duration: .2, width: "45px", height: "4px", top: "50%", left: "45%", rotate: "-45deg" })
    tlmenu.to(".lista-menu", {
      duration: .4,
      opacity: .8,
      width: "100vw",
      ease: "power2.in",
    });
    tlmenu.to(".lista-menu li", {
      duration: .7,
      opacity: 1,
      stagger: .1,
      ease: "power3.in",
    })
    boolmenu = true
  } else {
    gsap.to(".bar1", { duration: .2, width: "37px", height: "4px", top: "30%", left: "50%", rotate: "0deg" })
    gsap.to(".bar2", { duration: .2, width: "37px", height: "4px", top: "50%", left: "50%", opacity: 1 })
    gsap.to(".bar3", { duration: .2, width: "37px", height: "4px", top: "70%", left: "50%", rotate: "0deg" })
    tlmenu.to(".lista-menu li", {
      duration: .7,
      opacity: 0,
      stagger: .1,
      ease: "power3.out",
    })
    tlmenu.to(".lista-menu", {
      duration: .5,
      width: 0,
      ease: "power2.out",
    });
    boolmenu = false
  }
}

const showAnimli = gsap.from('.hamb', {
  yPercent: -180,
  stagger: 0.1,
  duration: 0.2,
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    if (self.direction === -1) {
      showAnimli.play();
    } else {
      showAnimli.reverse();
    }
  }
});

