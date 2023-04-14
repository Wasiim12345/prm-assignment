let totalClasses = prompt("Enter total number of classes: ");
let attendedClasses = prompt("Enter total number of classes attended: ");
let medicalCause = prompt("Do you have a medical condition? (Y/N)");

let attendancePercentage = (attendedClasses / totalClasses) * 100;

if (medicalCause.toUpperCase() === 'Y') {
  if (attendancePercentage >= 60) {
    console.log("You are eligible to sit in the exam.");
  } else {
    console.log("You are not eligible to sit in the exam.");
  }
} 
else {
  if (attendancePercentage >= 75) {
    console.log("You are eligible to sit in the exam.");
  } else {
    console.log("You are not eligible to sit in the exam.");
  }
}
