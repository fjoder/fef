// ******************************
//  Front End Foundations - Lesson 3
// ******************************

// Hands-On 1
let highSchoolGrade = 11;
let yourGrade;

switch(highSchoolGrade){
  case 9:
    yourGrade = "Freshman";
    break;
  case 10:
    yourGrade = "Sophomore";
    break;
  case 11:
    yourGrade = "Junior";
    break;
  case 12:
    yourGrade = "Senior";
    break;
  default:
    yourGrade = "Invalid";
}

console.log("Hands-On 1");
console.log("----------");

console.log("Grade: ", yourGrade)

// Hands-On 2
window.document.addEventListener("mouseover", function() {
  document.getElementById("mouse").innerHTML = "Hello World";
});

// Hands-on 3
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;

  document.getElementById("message").innerHTML = "Your birthday is: " + month + " " + day + ", " + year;
});
