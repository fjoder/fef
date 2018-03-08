// ******************************
//  Front End Foundations - Lesson 2
// ******************************

// Hands-On 1
function addNumbers(a, b = 10) {
  return a + b;
}
function divideNumbers(a, b = 1) {
  return a / b;
}
function averageNumbers(a, b = 5) {
  return (a + b) / 2
};

console.log("Hands-On 1");
console.log("----------");

console.log("Sum: ", addNumbers(1));
console.log("Quotient: ", divideNumbers(4, 2));
console.log("Average: ", averageNumbers(3));

// Hands-On 2
const sum = (a, b) => a + b;
const quotient = (a, b) => a / b;
const average = (a, b) => (a + b) / 2;

console.log();
console.log("Hands-On 2");
console.log("----------");

console.log("Sum: ", sum(1, 6));
console.log("Quotient: ", quotient(4, 2));
console.log("Average: ", average(3, 8));

// Hands-On 3
let newProduct = {
  cost: 1,
  labor: 2,
  totalPrice: function() {
    console.log((this.cost + this.labor) * 3);
  }
};

let wishList = {
  items: ["Monitor", "Processor"],
  newItem: "Keyboard",
  getNewList: function() {
    this.items.push(this.newItem)
    console.log(this.items);
  }
};

console.log();
console.log("Hands-On 3");
console.log("----------");

newProduct.totalPrice();
wishList.getNewList();
