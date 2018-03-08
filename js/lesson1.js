// ******************************
//  Front End Foundations - Lesson 1
// ******************************

// Hands-On 1
function totalPrice(sqEdge, pricePerSqFt) {
  return pricePerSqFt * (sqEdge ** 2);
}

console.log("Price: ", totalPrice(10,100))

// Hands-On 2
let day = "4";
let month = "August";
let year = "1983";

let myBirthday = month + " " + day + ", " + year

console.log("Birthday: ", myBirthday);

// Hands-On 3
let age = 15;

if(age >= 18)
{
  console.log("Permitted to attend alone");
}
else if (age < 10)
{
  console.log("Not permitted");
}
else if (age < 15)
{
  console.log("Permitted with parent");
}
else
{
  console.log("Permitted with anyone over 18");
}
