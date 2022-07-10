// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

function findMatching(arr, driverName) {
  let newArr = [];
  for (const element of arr) {
    element.toLowerCase();
    newArr.push(element);
  }
  let result = newArr.filter(
    (n) => n.toLowerCase() === driverName.toLowerCase()
  );
  return result;
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(arr, letters) {
  // let newArr = [];
  // for (const element of arr) {
  //   element.toLowerCase();
  //   newArr.push(element);
  // }
  // letters = letters.toLowerCase();
  let fuzzyResult = arr.filter((driver) => driver.startsWith(letters));
  return fuzzyResult;
}

console.log(fuzzyMatch(drivers, "Sa"));

const drivers2 = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(arr, str) {
  let matchResults = arr.filter((s) => s.name === str);
  return matchResults;
}

console.log(matchName(drivers2, "Bobby"));
