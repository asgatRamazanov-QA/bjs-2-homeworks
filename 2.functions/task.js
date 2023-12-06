//1 задание


function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;


	for (i = 0; i < arr.length; i++) {

		if (arr[i] !== undefined) {

			if (max < arr[i]) {
				max = arr[i];
			};

			if (min > arr[i]) {
				min = arr[i];
			};

			if (typeof arr[i] === "number" && arr[i] !== NaN) {
				sum += arr[i];
			};

			avg = sum / arr.length;

		} else {
			return 0;
		};
	};

	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};

};

getArrayParams(10, 10, 11, 20, 10);

// 2 задание

function summElementsWorker(...arr) {

	let sum = 0;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] !== undefined) {

			if (i != -1) {
				sum += arr[i];
			}

		} else {
			return 0;
		};

	};

	return sum;

};

summElementsWorker(10, 10, 11, 20, 10);

function differenceMaxMinWorker(...arr) {

	let min = Infinity;
	let max = -Infinity;

	for (i = 0; i < arr.length; i++) {

		if (arr !== undefined) {

			if (max < arr[i]) {
				max = arr[i];
			}

			if (min > arr[i]) {
				min = arr[i];
			}
		} else {
			return 0;
		};
	};

	let difference = max - min;

	if (difference === -Infinity) {
		return 0
	} else {
		return difference;
	}
};

differenceMaxMinWorker(10, 5, 16, 13, 25);

function differenceEvenOddWorker(...arr) {

	sumEvenElement = 0;
	sumOddElement = 0;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] !== undefined) {

			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		} else {
			return 0;
		};
	};

	return sumEvenElement - sumOddElement;

};

differenceEvenOddWorker(61, 206, 328, 284);

function averageEvenElementsWorker(...arr) {

	sumEvenElement = 0;
	countEvenElement = 0;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] !== undefined) {

			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		} else {
			return 0;
		};
	};

	if (sumEvenElement !== countEvenElement) {

		return sumEvenElement / countEvenElement;

	} else {

		return 0;

	};

};

averageEvenElementsWorker(1, 5, 6, 8);

// 3 задание

const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];

function makeWork(arrOfArr, func) {

	let maxWorkerResult;
	let array = [];
	let maxOfTheMax = [];

	for (let a = 0; a < arrOfArr.length; a++) {

		maxWorkerResult = arrOfArr[a];
		array.push(maxWorkerResult)
		maxOfTheMax.push(func(...maxWorkerResult));
	};
	const max = maxOfTheMax.reduce((a, b) => Math.max(a, b), -Infinity);
	return (max);

};

console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72

// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38
