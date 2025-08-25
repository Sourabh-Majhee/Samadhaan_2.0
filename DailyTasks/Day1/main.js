// Define a student object
const student = {
  name: "Rahul Sharma",
  age: 20,
  rollNo: "A123",
  course: "Computer Science",
  grade: "A"
};

// Function to print student details
function printStudentDetails(studentObj) {
  console.log("Student Details:");
  console.log("Name:", studentObj.name);
  console.log("Age:", studentObj.age);
  console.log("Roll No:", studentObj.rollNo);
  console.log("Course:", studentObj.course);
  console.log("Grade:", studentObj.grade);
}

// Call the function
printStudentDetails(student);
