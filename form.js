
let usuario = {}
const form = document.querySelector('form')
const presentacionA = document.querySelector(".presentacion__indexA");
const presentacionB = document.querySelector(".presentacion__indexB");
if (localStorage.length > 0) {
  presentacionA.style.zIndex = 0;
  pasarAscreen3()
} else {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newForm = new FormData(form)
    let usuario = Object.fromEntries(newForm)
    localStorage.setItem("usuario", JSON.stringify(usuario))
    const usuarioObj = JSON.parse(localStorage.getItem("usuario"))
    const nombreUsuario = document.getElementById('nombre');
    nombreUsuario.textContent = usuarioObj.nombre
    pasarAscreen2()
    pasarAscreen3()
  })

}

function pasarAscreen2() {
  let presentacionAtl = gsap.timeline({})
  presentacionAtl.to(".presentacion__indexA", { opacity: 0, duration: 2 })
    .add(() => { presentacionA.style.zIndex = 0; })
}

function pasarAscreen3() {
  const usuarioObj = JSON.parse(localStorage.getItem("usuario"))
  const nombreUsuario = document.getElementById('nombre');
  nombreUsuario.textContent = usuarioObj.nombre
  let presentacionBtl = gsap.timeline({})
  presentacionBtl.to(".presentacion__indexB", { delay: 2, opacity: 0, duration: 5, ease: "power.out" })
    .add(() => { presentacionB.style.zIndex = 0; })
    .fromTo("#buttonstart", { opacity: 0 }, { opacity: 1, duration: .5, ease: "power.out" },)
    .fromTo(".click-inicio", { x: -800, opacity: 0 }, { x: 0, opacity: 1, duration: .5, ease: "bounce.out" })
}
