/* const headerClass = document.querySelector(".header");
//headerClass.textContent = "Changed";
console.log(headerClass);
const headerId = document.getElementById("Idheader");
//console.log(headerId);
//const header3 = document.querySelector("#")
console.log(headerId.textContent);
console.log(headerId.value);
 */

/* const listItems = document.querySelectorAll(".list-item");
const listItem = document.querySelector(".list-item");
console.log(listItems);
//console.log(listItem);
const listItemArr = Array.from(listItems);
//console.log(listItemArr);
//console.log(listItem.parentElement);
 */
/* 
const list = document.querySelector(".list");
console.log(list.childElementCount);
console.log(list.firstChild);
console.log(list.firstElementChild); */

//const headerClass = document.querySelector(".header");

/* console.log(headerClass.classList);
const classArr = Array.from(headerClass.classList);
headerClass.classList.add("Karen");
//headerClass.classList = "";
//headerClass.classList = "Karen";
headerClass.classList.remove("Karen"); */
/* const button = document.querySelector(".toggle");
button.addEventListener("click", function() {
  headerClass.classList.toggle("Karen");
});
 */

///change bacco SPOACING IS SUPER IMPORTANT
const background = document.querySelector(".background");
const changeBtn = document.querySelector(".button");
const headerTwo = document.querySelector(".header-two");

changeBtn.addEventListener("click", function () {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  background.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  headerTwo.textContent = `rgb(${R}, ${G}, ${B})`;
});

/* changeBtn.addEventListener("click", function () {
  if (background.style.backgroundColor !== "rgb(155, 0, 125)") {
    background.style.backgroundColor = "rgb(155, 0, 125)";
    headerTwo.textContent = "Magenta";
  } else {
    background.style.backgroundColor = "rgb(0, 0, 125)";
    headerTwo.textContent = "Blue";
  }
}); */
/* changeBtn.addEventListener("click", function () {
  if (background.style.backgroundColor !== "rgb(255, 255, 255)") {
    background.style.backgroundColor = "rgb(255, 255, 255)";
  } else {
    background.style.backgroundColor = "rgb(255, 0, 255)";
  }
});
 */
//const x = 8; //global scope
/* const x = 87;
const testFn = function () {
  x = 9; //function scope
  return x;
};
testFn();
console.log(x);
 */
let score = 0;
const addScore = function () {
  score++;
  return score;
};
console.log(score);
addScore();
console.log(score);
addScore();
console.log(score);
addScore();
console.log(score);
