function parseCount(parse) {
	let number = Number.parseFloat(parse);
	if (Number.isNaN(Number.parseFloat(parse))) {
		throw new Error("Невалидное значение");
	}
	return number;
}

function validateCount(parse) {
	try {
		return parseCount(parse);
	} catch (error) {
		return (error);
	}
}
// вторая задача

class Triangle {
	constructor(a, b, c) { 
        this.triangleError = new Error("Треугольник с такими сторонами не существует");
		this.sideA = a;
		this.sideB = b;
		this.sideC = c;
		if (this.sideA + this.sideB < this.sideC || this.sideB + this.sideC < this.sideA || this.sideA + this.sideC < this.sideB) {
			throw this.triangleError;
		}
	}
	get perimeter() {
        let Perimeter= this.sideC + this.sideB + this.sideA;
		return Perimeter;
	}
	get area() {
		const p = this.perimeter / 2;
		let square = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3);
		return Number.parseFloat(square);
	}
	
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
            return "Ошибка! Треугольник не существует"
            },
            get perimeter() {
             return "Ошибка! Треугольник не существует"
            }
        }
    }
}