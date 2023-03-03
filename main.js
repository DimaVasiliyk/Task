class Square{
	element;
	height;
	width;
	cord;
	forces = []
	constructor(element){
		let rect = element.getBoundingClientRect()
		// this.cord = this.getCenter(rect);
		this.height = rect.height;
		this.width = rect.width;
		this.element = element;
}
	// getCenter(rect) {
	// return Vector.InitFromPoint(rect.top + rect.height / 2, rect.left + rect.width / 2) ;
	// 	}
}


class Vector{
	x;
	y;
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	
	add(v2){
		this.x += v2.x;
		this.y += v2.y;
	}

	// static InitFromTwoPoints(start, end) {
	// 	const x = end.x - start.x;
	// 	const y = end.y - start.y;

	// 	return new Vector(x, y)
	// }

	static add(v1, v2){
		return new Vector(
			v1.x + v2.x,
			v1.y + v2.y,
		);
	}
}


let force = new Vector (6,0);
let g = new Vector (0,10);
let AllVector = new Vector(0,0)
let element = document.querySelector(".green") 

let box = new Square(element)


function launchCoord (){
	console.log('launchCoord', box);
	box.element.style.position = 'absolute';
	box.element.style.left= "50px";
	box.element.style.top= "800px";
	box.element.style = `transform:translate(50px,800px )`

}

function step() {
	
	const sumV = Vector.add(g, force)
	AllVector.add(sumV);
	box.element.style = `transform:translate(${AllVector.x}px,${AllVector.y}px )`
	requestAnimationFrame(step);
}
step();

document.querySelector(".launch").addEventListener('click',launchCoord)







let sliderDegree = document.getElementById("degree");
let outputDegree = document.getElementById("degree-input");
outputDegree.innerHTML = sliderDegree.value;

sliderDegree.oninput = function() {
	outputDegree.innerHTML = this.value;
}

let sliderForce = document.getElementById("force");
let outputForce = document.getElementById("force-input");
outputForce.innerHTML = sliderForce.value;

sliderForce.oninput = function() {
	outputForce.innerHTML = this.value;
}



