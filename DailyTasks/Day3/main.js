// Student object with marks
const student = {
  name: "Rahul Sharma",
  marks: {
    math: 85,
    science: 90,
    english: 78,
    history: 88,
    computer: 95
  }
};

// Function to calculate results
function calculateResult(studentObj) {
  const marks = Object.values(studentObj.marks);

  // Total Marks
  const total = marks.reduce((sum, val) => sum + val, 0);

  // Average Marks
  const average = total / marks.length;

  // Grade System
  let grade;
  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else grade = "F";

  // Print Results
  console.log(`Student: ${studentObj.name}`);
  console.log("Total Marks:", total);
  console.log("Average Marks:", average.toFixed(2));
  console.log("Grade:", grade);
}

// Call function
calculateResult(student);
