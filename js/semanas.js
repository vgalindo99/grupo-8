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
const show14 = document.getElementById("show14");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const text5 = document.getElementById("text5");
const text6 = document.getElementById("text6");
const text7 = document.getElementById("text7");
const text8 = document.getElementById("text8");
const text9 = document.getElementById("text9");
const text10 = document.getElementById("text10");
const text11 = document.getElementById("text11");
const text12 = document.getElementById("text12");
const text13 = document.getElementById("text13");
const text14 = document.getElementById("text14");
const semanasSelector = document.getElementById("semanas-selector");
const semanaNumero = document.getElementById("semana-numero");
const semanaLink = document.getElementById("semana-link");

var i;
var selector = 1;
var memo = 1;
function shower(elemento, posicion) {
  elemento.addEventListener("click", () => {
    if (semanaNumero.childNodes[0]) {
      console.log(semanaNumero.childNodes[0]);
      semanaNumero.removeChild(semanaNumero.childNodes[0]);
    }
    var number = document.createTextNode(`${posicion}`);
    var node = document.createElement("span");
    node.appendChild(number);

    window[`text${memo}`].style.display = "none";

    window[`text${posicion}`].style.display = "block";

    semanaNumero.appendChild(node);

    elemento.style.background = "grey";
    elemento.style.transitionDelay = "0.4s";
    semanasSelector.style.left = `${(90 / 13) * (posicion - 1) -
      0.72 -
      0.125 * (posicion - 3)}rem`;
    window[`show${selector}`].style.background = "white";
    window[`show${selector}`].style.transitionDelay = "0s";
    window[`show${selector}`].style.transitionDuration = ".1s";
    selector = posicion;
    semanaLink.href = `Semana${posicion}.html`;
    memo = posicion;
  });
}

for (i = 1; i < 15; i += 1) {
  shower(window[`show${i}`], i);
}
