const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const semanas = document.getElementById('semanas');

let cMove = 0;
let count = 0;
arrowLeft.style.opacity = 0.1;

function moveLeft(elemento, number) {
	elemento.style.transform = `translateX(${number}px)`;
}
function moveRight(elemento, number) {
	elemento.style.transform = `translateX(${number}px)`;
}
arrowRight.addEventListener('click', () => {
	if (cMove !== -420) {
		cMove -= 420;
		moveLeft(item1, cMove);
		moveLeft(item2, cMove);
		moveLeft(item3, cMove);
		moveLeft(item4, cMove);
		moveLeft(item5, cMove);
		console.log(cMove);
		count++;
		arrowRight.style.opacity = 0.1;
	}
	if (cMove !== 0) {
		arrowLeft.style.opacity = 1;
	}
	if (cMove === 420) {
		arrowRight.style.opacity = 0.1;
	}
});
arrowLeft.addEventListener('click', () => {
	if (cMove !== 0) {
		cMove += 420;
		moveRight(item1, cMove);
		moveRight(item2, cMove);
		moveRight(item3, cMove);
		moveRight(item4, cMove);
		moveRight(item5, cMove);
		count--;
		arrowLeft.style.opacity = 0.1;

		console.log(cMove);
	} else {
		arrowLeft.style.opacity = 1;
	}
	if (cMove === 0) {
		arrowLeft.style.opacity = 0.1;
		arrowRight.style.opacity = 1;
	}
});
console.log(document.addEventListener());
