const btnColorMode = document.querySelector("#checkbox")



let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: lavanda)").matches ? "lavanda" : "rosa");
if (storedTheme)
  document.documentElement.setAttribute('data-theme', storedTheme)


btnColorMode.onclick = function () {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "rosa";

  if (currentTheme === "rosa") {
    targetTheme = "lavanda";
  }

  document.documentElement.setAttribute('data-theme', targetTheme)
  localStorage.setItem('theme', targetTheme);
};



const showAnimli = gsap.from('#checkbox', {
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
