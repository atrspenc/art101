// index.js - Lab 7 Funtions
// Author: Athena Spencer
// Date: 28 October 2024


// In the function, declare a variable userName and use window.prompt() to get the user's name from the user. 
// Variables
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName) ;
  // split string to array
  var nameArray = userName.split('') ;
  console.log("nameArray =", nameArraysort) ;
}

// Sort the letters of the user's name and return those from the function. Hint: You can't sort strings, but you can sort arrays. Can you convert it back and forth?
// Make sure your function uses return to return the results.
// Outside of the function, call the function and output the results with document.writeln() to neatly output the user's sorted name.
// Strings print nicely on your webpage, so you don't have to use JSON.stringify() this time.
