const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const semanas = document.getElementById('semanas');
let a = 0;
item1.style.left = `${26.25 * 0}rem`;
item2.style.left = `${26.25 * 1}rem`;
item3.style.left = `${26.25 * 2}rem`;
item4.style.left = `${26.25 * 3}rem`;
item5.style.left = `${26.25 * 4}rem`;

async function move(e, ini, fin) {
	a = 1;
	await e.animate(
		[
			{ left: ini },
			{ left: fin }
		],
		{
			duration : 500
		}
	);
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

arrowLeft.addEventListener('click', () => {
	if (a === 0) {
		movementLeft(item1);
		movementLeft(item2);
		movementLeft(item3);
		movementLeft(item4);
		movementLeft(item5);
	}
});
arrowRight.addEventListener('click', () => {
	if (a === 0) {
		movementRight(item1);
		movementRight(item2);
		movementRight(item3);
		movementRight(item4);
		movementRight(item5);
	}
});

// let cMove = 0;
// let count = 0;
// arrowLeft.style.opacity = 0.1;

// function moveLeft(elemento, number) {
// 	elemento.style.transform = `translateX(${number}px)`;
// }
// function moveRight(elemento, number) {
// 	elemento.style.transform = `translateX(${number}px)`;
// }
// arrowRight.addEventListener('click', () => {
// 	if (cMove !== -420) {
// 		cMove -= 420;
// 		moveLeft(item1, cMove);
// 		moveLeft(item2, cMove);
// 		moveLeft(item3, cMove);
// 		moveLeft(item4, cMove);
// 		moveLeft(item5, cMove);
// 		console.log(cMove);
// 		count++;
// 		arrowRight.style.opacity = 0.1;
// 	}
// 	if (cMove !== 0) {
// 		arrowLeft.style.opacity = 1;
// 	}
// 	if (cMove === 420) {
// 		arrowRight.style.opacity = 0.1;
// 	}
// });
// arrowLeft.addEventListener('click', () => {
// 	if (cMove !== 0) {
// 		cMove += 420;
// 		moveRight(item1, cMove);
// 		moveRight(item2, cMove);
// 		moveRight(item3, cMove);
// 		moveRight(item4, cMove);
// 		moveRight(item5, cMove);
// 		count--;
// 		arrowLeft.style.opacity = 0.1;

// 		console.log(cMove);
// 	} else {
// 		arrowLeft.style.opacity = 1;
// 	}
// 	if (cMove === 0) {
// 		arrowLeft.style.opacity = 0.1;
// 		arrowRight.style.opacity = 1;
// 	}
// });
