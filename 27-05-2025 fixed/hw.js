
// Write a function that takes a string as an argument and returns the number of characters in the string.
function CountOfChars(str) {
    let count = 0;
    for (const char of str) {
        count++;
    }
    return count;
}

let str1 = "Lorem ipsum dolor sit amet";
console.log(CountOfChars(str));
console.log(str.length);


// Create a function that converts a given string to uppercase.
function ToUp(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        // Check if lowercase letter
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

let str2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
console.log(ToUp(str));
console.log(str2.toUpperCase);


// Write a function that accepts two numbers and returns their sum.
function SumOfNums(a, b) {
    return a + b;
}

console.log(SumOfNums(2,1));
console.log(Math.sum(1,2));


// Reverse the string "hello" without using a built-in function.
function ReverseStr(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

let str3 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
console.log(ReverseStr(str3));
console.log(str3.split('').reverse().join(''));


// Merge the arrays let array1 = [1, 2]; and let array2 = [3, 4]; into a new array.
let array1 = [1, 2];
let array2 = [3, 4];
let mergedArray = [];
for (let i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i]);
}
for (let i = 0; i < array2.length; i++) {
    mergedArray.push(array2[i]);
}

mergedArray = array1.concat(array2);


// Check if the string "Learning JavaScript" contains the substring "Java".
let phrase = "Learning JavaScript";
let containsJava = false;
if (phrase.indexOf("Java") !== -1) {
    containsJava = true;
}

console.log(phrase.includes("Java"));

// Find the index of the value 9 in the array let numList = [3, 6, 9, 12];.
let numList = [3, 6, 9, 12];
let indexOfValue;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 9) indexOfValue = i;
    }
console.log(indexOfValue);
console.log(numList.indexOf(9));

// Compute the sum of all elements in the array let expenses = [50, 75, 100];.
let expenses = [50, 75, 100];
let sum = 0;
for (let i = 0; i < expenses.length; i++) {
    sum += expenses[i];
}

console.log(sum)
console.log(expenses.reduce((acc, val) => acc + val, 0));


// Write a function to check if a given string contains another substring.
function containsSubstring(mainStr, subStr) {
    for (let i = 0; i <= mainStr.length - subStr.length; i++) {
        let match = true;
        for (let j = 0; j < subStr.length; j++) {
            if (mainStr[i + j] !== subStr[j]) {
                match = false;
                break;
            }
        }
        if (match) return true;
    }
    return false;
}

console.log(containsSubstring(str1, "Lorem"));
console.log(str1.includes("Lorem"))



// Write a function that returns the sum of all elements in an array of numbers.
function SumOfArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let arr = [1,2,3,4,5];
console.log(SumOfArr(arr));
console.log(arr.reduce((acc, val) => acc + val, 0));

// Create a function that accepts a number and returns whether it is even or odd.
function EvenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(EvenOrOdd(2));

