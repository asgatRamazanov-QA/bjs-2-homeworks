//1 задание


function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;


	for (let i = 0; i < arr.length; i++) {

		if (max < arr[i]) {
			max = arr[i];
		};

		if (min > arr[i]) {
			min = arr[i];
		};

		sum += arr[i];

		avg = sum / arr.length;


	}
	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};
}


getArrayParams(10, 10, 11, 20, 10);

// 2 задание

function summElementsWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}
	return arr.reduce((a, b) => (a + b));
}

function differenceMaxMinWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}
	let min = Math.min(...arr);
	let max = Math.max(...arr);

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}

//Задача 3
function makeWork(arrOfArr, func) {
	let maxWorkResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const maximum = func(...arrOfArr[i]);
		if (maxWorkResult < maximum) {
			maxWorkResult = maximum;
		}
	}
	return maxWorkResult;
}