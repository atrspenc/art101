// index.js - Lab 8 Anon Funtions and Callbacks
// Author: Athena Spencer
// Date: 31 October 2024

// Step 1: Create an array of numbers
var array = [1, 4, 9, 16, 25];

// Step 2: Define a named function that squares each number
function squareRoot(x) {
    var results = Math.sqrt(x);
    return results;
}

// Step 3: Test the named function with a few numbers
console.log(squareRoot(4));  // 2
console.log(squareRoot(9));  // 3
console.log(squareRoot(16)); // 4

// Step 4: Use map with the named function as a callback
var mapResults = array.map(squareRoot);
console.log("Results (Square Roots):", mapResults);

// Step 5: Use an anonymous function as a callback with a new operation (squaring each number)
var newMapResults = array.map(function(x) {
    var results = x * x;
    return results;
});
console.log("Results (Squared Values):", newMapResults);
