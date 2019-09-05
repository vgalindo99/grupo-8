const show1 = document.getElementById("show1");
const show2 = document.getElementById("show2");
const show3 = document.getElementById("show3");
const show4 = document.getElementById("show4");
const show5 = document.getElementById("show5");
const show6 = document.getElementById("show6");
const show7 = document.getElementById("show7");
const show8 = document.getElementById("show8");
const show9 = document.getElementById("show9");
const show10 = document.getElementById("show10");
const show11 = document.getElementById("show11");
const show12 = document.getElementById("show12");
const show13 = document.getElementById("show13");
const semanasSelector = document.getElementById("semanas-selector");
const semanaNumero = document.getElementById("semana-numero");
const semanaLink = document.getElementById("semana-link");

var i;
var selector = 1;

function shower(elemento, posicion) {
  elemento.addEventListener("click", () => {
    if (semanaNumero.childNodes[0]) {
      console.log(semanaNumero.childNodes[0]);
      semanaNumero.removeChild(semanaNumero.childNodes[0]);
    }
    var number = document.createTextNode(`${posicion}`);
    var node = document.createElement("span");
    node.appendChild(number);
    semanaNumero.appendChild(node);
    elemento.style.background = "grey";
    elemento.style.transitionDelay = "0.4s";
    semanasSelector.style.left = `${(90 / 12) * (posicion - 1) -
      0.75 -
      0.125 * (posicion - 3)}rem`;
    window[`show${selector}`].style.background = "white";
    window[`show${selector}`].style.transitionDelay = "0s";
    window[`show${selector}`].style.transitionDuration = ".1s";
    selector = posicion;
    semanaLink.href = `semana${posicion}.html`;
  });
}

for (i = 1; i < 14; i += 1) {
  shower(window[`show${i}`], i);
}
