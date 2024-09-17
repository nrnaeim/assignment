///calculateDifference start
function calculateDifference(num1 = 13, num2 = 4) {
  return num1 - num2;
}
var difference = calculateDifference(10, 20);
console.log("1) Difference is: ", difference);

//odd even check
function isOdd(num = 5) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
var check = isOdd(20);
console.log("2) This number is odd:", check);

let num = [
  47, 120, 144, 73, 94, 183, 24, 12, 138, 143, 199, 139, 144, 136, 180, 166,
  119, 106, 76, 51,
];
// finding minimun number from an array
function findMin(numArray) {
  let accendindArray = numArray.sort((a, b) => {
    return a - b;
  });
  return accendindArray[0];
}
let min = findMin(num);
console.log("3) Minimum value from num array is:", min);

//even numver filter
function filterEvenNumbers(numArray) {
  let evenNumbers = [];
  numArray.forEach((num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  });
  return evenNumbers;
}
let evenNumbers = filterEvenNumbers(num);
console.log("4) Even numbers from num array are:", evenNumbers);

//sortArrayDescending;
function sortArrayDescending(numArray) {
  let descendingArray = numArray.sort((a, b) => {
    return b - a;
  });
  return descendingArray;
}
let descending = sortArrayDescending(num);
console.log("5) Num array in descending form is:", descending);

//lowercaseFirstLetter
function lowercaseFirstLetter(str = "lowercaseFirstLetter") {
  let strArray = str.split("");
  let firstLower = strArray.fill(strArray[0].toLowerCase(), 0, 1).join("");
  return firstLower;
}
let firstLower = lowercaseFirstLetter("Hello Everybody");
console.log("6) First letter lowercased:", firstLower);

//countVowels
function countVowels(str = "countVowels") {
  let count = 0;
  str
    .toUpperCase()
    .split("")
    .forEach((char) => {
      if (
        char === "A" ||
        char === "E" ||
        char === "I" ||
        char === "O" ||
        char === "U"
      ) {
        count++;
      }
    });
  return count;
}
let numOfVowels = countVowels("Hello everybody");
console.log("7) Num of Vowels:", numOfVowels);

//findAverage
function findAverage(numArray = [1, 2, 3, 4, 5]) {
  let total = numArray.reduce((total, value) => {
    return total + value;
  }, 0);
  return total / numArray.length;
}
let average = findAverage(num);
console.log("8) Average is:", average);
