//1
const person1 = { name: "Alice", age: 25 };
const person2 = { age: 30, city: "New York" };
const mergedPerson = Object.assign({}, person1, person2);
console.log("Merged Person:", mergedPerson);

//2
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        copy[key] = deepClone(obj[key]);
    }
    return copy;
}

//3
const student = Object.freeze({ name: "John", age: 20 });
student.age = 25;
console.log("Frozen Student Age:", student.age);

//4
const keys = ["firstName", "lastName", "age"];
const values = ["Jane", "Doe", 28];
const dynamicObj = {};
keys.forEach((key, i) => dynamicObj[key] = values[i]);
console.log("Dynamic Object:", dynamicObj);

//5
const isAdmin = true;
const user = {
    name: "Bob",
    ...(isAdmin && { role: "admin" })
};
console.log("User with Conditional Role:", user);

//6
const Person = {
    greet() {
        return `Hello, I'm a person.`;
    }
};
const Student = Object.create(Person);
Student.major = "Math";
Student.greet = function () {
    return `Hello, I'm a student majoring in ${this.major}.`;
};

//7
function StudentConstructor(major) {
    this.major = major;
}
StudentConstructor.prototype = Object.create(Person);
const studentInstance = new StudentConstructor("Physics");
console.log(studentInstance instanceof StudentConstructor);

//8
function Car(make, model) {
    this.make = make;
    this.model = model;
}
Car.prototype.getDescription = function () {
    return `${this.make} ${this.model}`;
};
const car = new Car("Toyota", "Corolla");
console.log(car.getDescription());

//9
const obj = { a: 1, b: 2, c: 3 };
for (let key of Object.keys(obj)) {
    console.log(obj[key]);
}

//10
const original = { a: 1, b: "hello", c: 3 };
const filtered = Object.fromEntries(Object.entries(original).filter(([_, v]) => typeof v === "number"));
console.log(filtered);

//11
function shallowMerge(...objs) {
    return Object.assign({}, ...objs);
}

//12
function isEqual(obj1, obj2) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null)
        return obj1 === obj2;
    const keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    return keys1.every(key => isEqual(obj1[key], obj2[key]));
}

//13
function countProperties(obj) {
    let count = 0;
    for (let key in obj) count++;
    return count;
}

//14
function addMethod(obj, methodName) {
    obj[methodName] = function () {
        return `${methodName} was called.`;
    };
}

//15
const nested = { user: { name: "Anna", info: { age: 22, city: "LA" } } };
const { user: { name, info: { age, city } } } = nested;

//16
const data = { a: 5 };
const { a = 0, b = 10 } = data;

//17
const objectWithRest = { a: 1, b: 2, c: 3 };
const { a: aVal, ...rest } = objectWithRest;
console.log(rest);

//18
function toUpperCaseValues(obj) {
    return Object.values(obj).map(val => typeof val === "string" ? val.toUpperCase() : val);
}

//19
const jsonObj = { name: "Leo", age: 30 };
const jsonStr = JSON.stringify(jsonObj);
const parsed = JSON.parse(jsonStr);
console.log(parsed);

//20
function filterNumbers(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => typeof v === "number"));
}

//21
function getUniqueKeys(objects) {
    const result = {};
    objects.forEach(obj => {
        for (let key in obj) {
            result[key] = obj[key];
        }
    });
    return result;
}

//22
const container = { item: "pen" };
const containerCopy = { ...container };
containerCopy.item = "pencil";
console.log(container.item);

//23
function Gadget(name) {
    this.name = name;
}
const gadget1 = new Gadget("Phone");
Gadget.prototype.describe = function () {
    return `Gadget: ${this.name}`;
};
console.log(gadget1.describe());

//24
const sym = Symbol("secret");
const symObj = { [sym]: "hidden", visible: "shown" };
console.log(Object.getOwnPropertySymbols(symObj));

//25
const base = {
    greet() {
        return "Hello from base!";
    }
};
const child = { name: "child" };
Object.setPrototypeOf(child, base);
console.log(child.greet());

//Bonus
function createStudent(name, age, grades) {
    return {
        name,
        age,
        grades,
        getAverageGrade: function () {
            const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
            return this.grades.length ? sum / this.grades.length : 0;
        }
    };
}

const students = [];

function addStudent(studentsArray, name, age, grades) {
    const student = createStudent(name, age, grades);
    studentsArray.push(student);
}

addStudent(students, "Alice", 20, [80, 90, 100]);
addStudent(students, "Bob", 22, [70, 85, 95]);

students.forEach(s => {
    console.log(`${s.name}'s average grade: ${s.getAverageGrade()}`);
});
