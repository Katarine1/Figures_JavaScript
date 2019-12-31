//Variables

let lado = prompt("Enter the value of the square side:");
let base = prompt("Enter the base rectangle value:");
let height = prompt("Enter the value of the rectangle height:");
let radius = prompt("Enter the value of the circle radius:");

let PI = 3.14; 
let result = 0;
let value = 0;

//Functions

function areaSquare(){
	result = lado * lado;
	value = result.toFixed(2);
	console.log("Square Area: " + value);
}

function perimeterSquare(){
	result = 4 * lado;
	value = result.toFixed(2);
	console.log("Square Perimeter: " + value);	
}

function areaRectangle(){
	result = base * height;
	value = result.toFixed(2);
	console.log("Rectangle Area: " + value);
}

function perimeterRectangle(){
	result = 2 * (parseFloat(base) + parseFloat(height));
	value = result.toFixed(2);
	console.log("Rectangle Perimeter: " + value);		
}

function areaCircle(){
	result = PI * radius * radius;
	value = result.toFixed(2);
	console.log("Circle Area: " + value);
}

function perimeterCircle(){
	result = 2 * PI * radius;
	value = result.toFixed(2);
	console.log("Circle Perimeter: " + value);
}

areaSquare();
perimeterSquare();

areaRectangle();
perimeterRectangle();

areaCircle();
perimeterCircle();