// ******************************
//  Front End Foundations - Lesson 4
// ******************************

// Hands-On 1
function phoneNumberFormat(phoneNumber) {
  // phoneNumber = document.getElementById("phNumber").value;
  let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/g;
  let message = phoneNumber.match(phoneRegex) ? "Valid number entered" : "Phone number entered is invalid";
  console.log(message); // changed alert(message) to run test
}

console.log("Hands-On 1");
console.log("----------");

phoneNumberFormat("(555) 555-1234");

// Hands-On 2
let newNumber = 10;
try {
  if (newNumber > 5) throw "Number is greater than 5";
  if (newNumber < 5) throw "Number is less than 5";
  if (newNumber === 5) throw "Number equals 5";
} catch (error) {
  console.log();
  console.log("Hands-On 2");
  console.log("----------");
  console.log(error);
}

// Hands-On 3
function validateNames() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let regex = /^[A-Z][a-zA-Z]{1,}/g;
  let errors = [];
  let element = document.getElementById("message");

  if (!firstName.match(regex))
  {
    errors.push("First name is invalid");
  }
  if (!lastName.match(regex))
  {
    errors.push("Last name is invalid");
  }

  element.innerHTML = "";
  errors.forEach(item => {
    let node = document.createElement("p");
    node.innerHTML = item;
    element.appendChild(node);
  });
}
