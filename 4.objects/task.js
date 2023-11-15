function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (!this.marks) {
      console.log("Студент отчислен, невозможно добавить оценки.")
      return;
  }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
      return 0;
  }
  const sum = this.marks.reduce((a, b) => a + b, 0);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

const student_1 = new Student("Vadim", "male", 23);
const student_2 = new Student("Alex", "male", 20);
const student_3 = new Student("Maria", "female", 18);

student_1.setSubject("Math");
student_1.addMarks(5, 4, 4, 5);
console.log(student_1);
console.log("Средний балл:", student_1.getAverage(), "\n")

student_2.exclude("Прогул");
console.log(student_2);
