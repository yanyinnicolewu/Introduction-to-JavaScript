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
//let age = 17;

/* if (age < 18) {
  console.log("You are a child");
} else if (age >= 18) {
  console.log("You are an adult now");
} */
//Results in you are a child

/* let school = "elementary";
if (school == "elementary") {
  console.log("You are in elementary school");
} else if (school == "middle") {
  console.log("you are in middle school");
} else {
  console.log("You are in high school");
}
 */

/* let light = "green";
if (light === "green") {
  console.log("go");
} else if (light === "yellow") {
  console.log("use caution");
} else {
  console.log("stop");
} */

/* let temp = 77;

if (temp < 68) {
  console.log("Too cold");
} else if (temp >= 68 && temp <= 72) {
  console.log("Perfect");
} else if (temp > 72 && temp <= 76) {
  console.log("its too warm");
} else {
  console.log("its way too hot");
}
 */
/* let kristyLactInt = false;
let baoBaoLactint = false;
if (kristyLactInt == true && baoBaoLactint == true) {
  console.log("get almond milk");
} else if (kristyLactInt == true || baoBaoLactint == true) {
  console.log("get milk and almond milk");
} else {
  console.log("we only need milk");
}
 */

/////////////////////////////////Functions

/* function test() {
  console.log("I am a function");
}
function argument(argument) {
  console.log(argument);
}
test();
argument("Edis");
function add(x, y) {
  return x + y;
}
console.log(add(2, 7));

let z = function(a, b) {
  return a * b;
};

console.log(z(5, 10));

//Abstraction Example
 */
////////////////////////////////////Scoping
//let vs const first
/* function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc(); */
/////////////////////////////////////////////// Arrays

/* let names = ["Michelle", "Edis", "Richard", "Giselle", "Gia"];
names.forEach(name => console.log(name)); */
//push example
/* let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
const result = students.filter(student => student.length < 5);
console.log(result);
 */

//another example
/* const divArr = document.querySelectorAll(".bc");
function color() {
  divArr.forEach(div => {
    div.style.backgroundColor = "blue";
  });
}
color(); */

/////Spread Operator
/* const numbers = [1, 2, 3];
const add = function(x, y, z) {
  return x + y + z;
};
console.log(add(...numbers));
 */

/* const numbers = [1, 50, 34, 75, 11];
const biggestNum = Math.max(...numbers);
console.log(biggestNum);
 */

////////////////////////////Closures
/* function pam() {
  let name = "Pam Beesly"; // Declare variable
  function displayName() {
    console.log(name); //log that variable from the outer function
  }
  function setName(newName) {
    name = newName; // this inner function REDEFINES the outer variable
  }
  displayName(); //log OG name
  setName("Pam Halpert"); //Set new name
  displayName(); //log new name
}
pam(); */
/* 
function dwightJob(title) {
  return function(prefix) {
    return prefix + " " + title;
  };
}

var sales = dwightJob("Salesman");
var manager = dwightJob("Manager");

console.log(sales("Top")); // Top Salesman
console.log(manager("Assistant to the Regional")); // Assistant to the Regional Manager
console.log(manager("Regional")); // Regional Manager */

//https://medium.com/@dis_is_patrick/practical-uses-for-closures-c65640ae7304

/* sales("Top") 
dwightJob("Salesman"){
  return function("Top"){
    return "Top" + "Salesmen"
  }
} */

///////////Functions
/* function test() {
  console.log("I am a function");
}
test(); */
/* function argument(argument) {
  console.log(argument);
}
//argument("Edis");
function add(x, y) {
  return x + y; //return ends the function
}
//console.log(add(2, 7));
let z = function add(x, y) {
  return x + y; //return ends the function
};
z(1, 11);
console.log(z(1, 11)); */
////////////////////////////////////Scoping
//let x = "x";
//const z = "z"; //99% of the time
/* const hello = function() {
  alert("hello");
};
const bye = function() {
  alert("bye");
  alert("bye");
  alert("bye");
  alert("bye");
  alert("bye");
  alert("bye");
  alert("bye");
};

function beatles() {
  hello();
  bye();
  hello();
  bye();
}
beatles(); */

//global or window scope

/* function hello() {
  const name = "Jaiyu";
  console.log(name);
} */
/* hello();
makeFunc();
 */

/* function makeFunc() {
  //function scope
  const name = "Sun";
  function displayName() {
    alert(name); //still has access to outer variable name
  }
  return displayName; //returning the inner function
}

const myFunc = makeFunc();
myFunc();
 */
