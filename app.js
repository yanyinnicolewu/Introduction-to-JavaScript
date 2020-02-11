//console.log("Connected");

//Strings are the first primitive data type we will discuss
/* let string = "String"; //Strings can be stated with either single quotes
const alsoString = "double quotes are okay"; // double quotes or with back ticks (`)
const templateString = `Template Literal String`;

//combining strings
let sentence = "Hello " + "Vicky";
//console.log(sentence);
let sentence2 = " and also Angel";
//const combine = sentence + sentence2;
//console.log(combine);
const combine = `${sentence}${sentence2}`; //Template literals
//console.log(combine);

let student1 = "Sandra";
let student2 = "Kelly";
let courseName = "AP Computer Science";
let teacherName = "Whalen";
const longSentence = `${student1} and ${student2} are amazing and will be taking ${courseName} next year with ${teacherName}`;

const longerSentence =
  student1 +
  " and " +
  student2 +
  " are amazing and will be taking " +
  courseName +
  " next year with " +
  teacherName;

console.log(longSentence);
console.log(longerSentence); */

////////////////////////////////////////////////Numbers/Integers
/* let year = 2020;
let nextYear = year + 1;
console.log(nextYear);
let past = year / 2; //Division
let lastYear = year - 1; //subtraction
let farFuture = year * 100;
console.log(past, lastYear, farFuture);
 */

/////Booleans
/* let trueStatement = true;
let falseStatement = false; */

///////Null and Undefined
/* let undefinedVariable;
console.log(undefinedVariable); //will return a value of undefined
console.log(nonexistent); //will cause a reference error of undefined AKA null */

//////////////////////////////////////Boolean Logic If/Else Statements
/* let student = "Karen";
let age = 17;
console.log(student === "Karen"); //true
console.log(student === "karen"); //false
console.log(student == "karen"); //false
console.log(age == "17"); //true does not take type into account
console.log(age === "17"); //false does take type into account
 */

/* let age = 16;
age < 17; //true
age <= 17; //true
age <= 15; //false
age <= 16; //true
//OR
age == 16 || age == 17; //true age is equal to 16 OR equal 17
//AND
age == 16 && age == 17; //false age is not equal to 16 AND equal to 17
//Not
age !== 17; //true, age is NOT equal to 17
console.log(age !== 17); //true */

//////////////////////////////////////////////////// IF Statements
let age = 17;

if (age < 18) {
  console.log("You are a child");
} else if (age >= 18) {
  console.log("You are an adult now");
}

//Results in you are a child