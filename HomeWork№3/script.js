//exercise #1

let sum = 0;

for (let i = 50; i < 101; i++) {
	sum = sum + i;
}

console.log('Result for exercise #1');
console.log(`${sum}`);
console.log('');

//exercise #2

console.log('Result for exercise #2');

for (let i = 1; i < 11; i++) {
	console.log(7 * i);
}

console.log('');

//exercise #3

let n = prompt(`Enter a number:`);
let result = 0;
let counter = 0;

for(let i = 1; i < n; i++) {
	if(i % 2 > 0) {
		result = result + i;
		counter++;
	}
}

result = result / counter;

console.log('Result for exercise #3');
console.log(`${result}`);
console.log('');