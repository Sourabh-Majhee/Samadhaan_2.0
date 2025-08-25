// Using Loops

const marks = [65, 89, 75, 92, 56, 99, 84];

let highest = marks[0];

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i];
  }
}

console.log("Highest Marks:", highest);
