// code
const numbers = [
	[1, 2, 3, 4, 5],
	[11, 20, 33, 40, 55],
	[111, 200, 333, 400, 555],
];

function isOdd(number) {
	return number % 2 !== 0;
}

for (let i = 0; i < numbers.length; i++) {
	for (let j = 0; j < numbers[i].length; j++) {
		if (isOdd(numbers[i][j])) {
			numbers[i].splice(j, 1);
			j--;
		}
	}
}

console.log(numbers)