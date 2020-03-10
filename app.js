/////////////////////Objects
/* const Lisa = {
  name: "Lisa",
  age: 17,
  graduated: false
};
console.log(Lisa.name);

Math.random;
Array.from;
Object.create();
Map.apply();
 */

//console.log(Math);

/* const Homer = {
  name: "Homer",
  age: 32,
  graduated: false,
  family: {
    wife: {
      name: "Marge",
      age: 32
    },
    son: {
      name: "bart",
      age: 10
    },
    daughter: {
      name: "Lisa",
      age: 8
    }
  }
};

console.log(Homer);
 */

/* const Homer = {
  name: "Homer",
  age: 32,
  graduated: false,
  family: {
    wife: {
      name: "Marge",
      age: 32
    },
    son: {
      name: "bart",
      age: 10
    },
    daughter: {
      name: "Lisa",
      age: 8
    }
  }
};

Homer.family.daughter2 = {
  name: "Maggie",
  age: 0
};

console.log(Homer.family);
 */

/////references in objects

/* const Lisa = {
  name: "Lisa",
  age: 17
};
const Melvin = Lisa;
//console.log(Melvin);

Melvin.name = "Melvin";
console.log(Lisa);
 */
/* const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

const Dems = presidents.filter(el => el.party === "D"); */
//console.log(Dems);
/* const oneTermRep = presidents.filter(function(pres) {
  if (pres.terms === 1 && pres.party === "R") {
    return true;
  }
}); */
//const oneTermRep = presidents.filter(el => el.party === "R" && el.terms === 1);
//console.log(oneTermRep);

//return only last three presidents
/* const three = presidents.slice(presidents.length - 3);
console.log(three); */

////print the array in reverse
//const reverse = presidents.reverse();
//console.log(reverse);

//return only the last three presidents
/* const three = reverse.slice(presidents.length - 3);
console.log(three); */

////log all democrats who served 2 terms
/* const dems2 = presidents
  .filter(el => el.party === "D")
  .filter(el => el.terms === 2)
  .slice();

console.log(dems2);
 */
//Was lyndon Johnson a 2 term president?

/* const dems2 = presidents
  .filter(el => el.party === "D")
  .filter(el => el.terms === 2);

if (dems2.some(person => person.name === "Lyndon Johnson")) {
  alert("Object found inside the array.");
} else {
  alert("Object not found.");
}
 */
