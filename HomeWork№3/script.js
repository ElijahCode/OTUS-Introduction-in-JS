//exercise #1

export function getSumOfNumbers (firstNumb, lastNumb) {
	let sum = 0;

	for (let i = firstNumb; i < lastNumb + 1; i++) {
		sum = sum + i;
	}

	return sum;
}



console.log('Result for exercise #1');
console.log(getSumOfNumbers(50, 100));
console.log('');

//exercise #2

console.log('Result for exercise #2');

export function getTableOfMultiplication(number, sizeOfTable) {
	let result = [];

	for (let i = 1; i < sizeOfTable + 1; i++) {
		result.push(number * i);
	}

	return result;
}

console.log(getTableOfMultiplication(7, 10));
console.log('');

//exercise #3

export function getSumOfOddNumbers (number) {
	
	let result = 0;
	let counter = 0;

	for(let i = 1; i < number + 1; i++) {
		if(i % 2 > 0) {
			result = result + i;
			counter++;
		}
	}
	
	result = result / counter;

	return result;
}

console.log('Result for exercise #3');
console.log(getSumOfOddNumbers(10));
console.log('');