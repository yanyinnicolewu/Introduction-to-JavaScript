const london = {
  firstName: "London",
  lastname: "Valentine",
  graduated: false,
  DOB: 2010,
  sibling: ["Paris", "Rio"],
  age: function () {
    return year - this.DOB;
  }
}

console.log(london.siblings);