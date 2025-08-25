// Using reduce()

const marks = [65, 89, 75, 92, 56, 99, 84];

const highest = marks.reduce((max, curr) => curr > max ? curr : max, marks[0]);

console.log("Highest Marks:", highest);
