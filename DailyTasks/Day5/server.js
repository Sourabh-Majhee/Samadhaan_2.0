const express = require("express");
const app = express();
const PORT = 3000;

// Dummy student data
const student = [
  { id: 1, name: "Rahul Sharma", age: 20, course: "Computer Science" },
  { id: 2, name: "Priya Verma", age: 21, course: "Information Technology" },
  { id: 3, name: "Amit Singh", age: 19, course: "Electronics" },
  { id: 4, name: "Neha Gupta", age: 22, course: "Mechanical" },
];

// API endpoint - return list of students
app.get("/students", (req, res) => {
  res.json(students);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
