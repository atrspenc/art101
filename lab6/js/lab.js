// index.js - Learning Arrays and Objects
// Author: Athena Spencer
// Date: 10/24/2024

// Variables
myTransport = ["UCSC Bus", "walking", "My Personal car"];

// Object
myPersonalCar = {
  Make: "Volkswagen",
  Model: "Jetta",
  Color: "Silver",
  Year: 2012,
  age: function () {
    return 2024 - this.year;
  }
}

// Output
document.writeln("The kinds of transportation I use around campus:", myTransport, "</br>");
document.writeln("My personal car <pre>", JSON.stringify(myPersonalCar, null, '/t'), "</pre>");