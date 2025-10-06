function occupied(y, t) {
  for (let i = 0; i < y.length; i++) {
    console.log(y[i], t[i]);
    //
    if (y[i] === "c" && t[i] === "c") {
      //do something
      occupied++;
    }
  }
  console.log(occupied);
}
occupied("ccc..", "cccc.c");

const london = {
  firstName: "London",
  lastname: "Valentine",
  graduated: false,
  DOB: 2010,
  sibling: ["Paris", "Rio"],
  age: function () {
    return year - this.DOB;
  },
};

console.log(london.siblings);
