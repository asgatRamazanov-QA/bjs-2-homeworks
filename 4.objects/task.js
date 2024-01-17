function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];

}

const student1 = new Student("Иван", "Мужской", 31);



Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;

}
student1.setSubject("Algebra");

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks') === true) {
		this.marks.push(...marks);
	} else {
		return 0;
	}

};
student1.addMarks(4, 5, 4, 5);

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks') === false || this.marks === 0) {
		return 0;
	} else {
		const gradePointAverage = this.marks.reduce((acc, mark, index, arr) => {
			acc += mark;
			if (index === arr.length - 1) {
				return acc / arr.length;
			}
			return acc;
		}, 0);
		return gradePointAverage;
	}

};
student1.getAverage();

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}


console.log(student1);
