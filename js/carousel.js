const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const semanas = document.getElementById("semanas");

let a = 0;
item1.style.left = `${26.25 * 0}rem`;
item2.style.left = `${26.25 * 1}rem`;
item3.style.left = `${26.25 * 2}rem`;
item4.style.left = `${26.25 * 3}rem`;
item5.style.left = `${26.25 * 4}rem`;

async function move(e, ini, fin) {
  a = 1;
  await e.animate([{ left: ini }, { left: fin }], {
    duration: 500,
    easing: "ease"
  });
  e.style.left = fin;
  setTimeout(() => {
    a = 0;
  }, 500);
}

function movementLeft(e) {
  if (e.style.left == `${26.25 * 4}rem` || e.style.left == `${-26.25 * 1}rem`) {
    move(e, `${26.25 * -1}rem`, `${26.25 * 0}rem`);
  } else if (e.style.left == `${26.25 * 0}rem`) {
    move(e, `${26.25 * 0}rem`, `${26.25 * 1}rem`);
  } else if (e.style.left == `${26.25 * 1}rem`) {
    move(e, `${26.25 * 1}rem`, `${26.25 * 2}rem`);
  } else if (e.style.left == `${26.25 * 2}rem`) {
    move(e, `${26.25 * 2}rem`, `${26.25 * 3}rem`);
  } else if (e.style.left == `${26.25 * 3}rem`) {
    move(e, `${26.25 * 3}rem`, `${26.25 * 4}rem`);
  }
}
function movementRight(e) {
  if (e.style.left == `${26.25 * 4}rem` || e.style.left == `${26.25 * -1}rem`) {
    move(e, `${26.25 * 4}rem`, `${26.25 * 3}rem`);
  } else if (e.style.left == `${26.25 * 3}rem`) {
    move(e, `${26.25 * 3}rem`, `${26.25 * 2}rem`);
  } else if (e.style.left == `${26.25 * 2}rem`) {
    move(e, `${26.25 * 2}rem`, `${26.25 * 1}rem`);
  } else if (e.style.left == `${26.25 * 1}rem`) {
    move(e, `${26.25 * 1}rem`, `${26.25 * 0}rem`);
  } else if (e.style.left == `${26.25 * 0}rem`) {
    move(e, `${26.25 * 0}rem`, `${26.25 * -1}rem`);
  }
}

arrowLeft.addEventListener("click", () => {
  if (a === 0) {
    movementLeft(item1);
    movementLeft(item2);
    movementLeft(item3);
    movementLeft(item4);
    movementLeft(item5);
  }
});
arrowRight.addEventListener("click", () => {
  if (a === 0) {
    movementRight(item1);
    movementRight(item2);
    movementRight(item3);
    movementRight(item4);
    movementRight(item5);
  }
});
semanas.style.transform = `translateX(-${0}px)`;
// let count = 0;
// let active = 0;
// let previous = 0;
// let actual = 0;
// function slide(e) {
// 	if (e.movementX > 0) {
// 		if (actual > 0 || actual + e.movementX > 0) {
// 			actual = 0;
// 		} else if (actual !== 0) {
// 			actual += e.movementX;
// 		}
// 	}
// 	if (e.movementX < 0) {
// 		if (actual < -4700 || actual + e.movementX < -4700) {
// 			actual = -4700;
// 		} else if (actual !== -4700) {
// 			actual += e.movementX;
// 		}
// 	}
// 	count++;
// 	semanas.style.transform = `translateX(${actual}px)`;
// }
// let slider = (e) => {
// 	slide(e);
// };

// semanas.addEventListener('mousedown', (e) => {
// 	active = 0;
// 	previous = actual;
// 	if (e.buttons === 1) {
// 		semanas.addEventListener('mousemove', slider);
// 	}
// });
// window.addEventListener('mouseup', () => {
// 	// For all major browsers, esemanascept IE 8 and earlier
// 	semanas.removeEventListener('mousemove', slider);
// });
