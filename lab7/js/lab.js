// index.js - Lab 7 Funtions
// Author: Athena Spencer
// Date: 28 October 2024


// In the function, declare a variable userName and use window.prompt() to get the user's name from the user. 
// Variables
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("userArray =", nameArraySort);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array bacl to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
  
}

// output
document.writeln("Oh hey, I've fixed your name: ",
  sortUserName(), "</br>");

