//#1

const a = 15;
const b = 21;

console.log('Result for exersice #1');

if (a > b) {
	console.log(a);
} else if (b > a) {
	console.log(b);
} else {
	console.log(`a is equal b`);
}

//#2

const value = prompt('Enter a value range in 1 to 12');
console.log('Result for exersice #2');

switch (value) {
	case '1':
		console.log("January");
		break;
	case '2':
		console.log("February");
		break;
	case '3':
		console.log("March");
		break;
	case '4':
		console.log("April");
		break;
	case '5':
		console.log("May");
		break;
	case '6':
		console.log("June");
		break;
	case '7':
		console.log("Jule");
		break;
	case '8':
		console.log("August");
		break;
	case '9':
		console.log("September");
		break;
	case '10':
		console.log("October");
		break;
	case '11':
		console.log("November");
		break;
	case '12':
		console.log("December");
		break;
	default:
		console.log("Wrong number");
		break;
}

//#3
console.log('Result for exersice #3');

SquareOfSquare = 50;
SquareOfCircle = 40;

console.log(Math.sqrt(SquareOfSquare) >= 2 * Math.sqrt(SquareOfCircle/Math.PI));