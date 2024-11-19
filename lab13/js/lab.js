/*
    lab.js - This simple JavaScript/jQuery script appends new elements to an output div

    Requirements: jQuery must be loaded for this script to work.

    Author: Athena Spencer
    Date: 11/18/24
*/

function fizzBuzzBoom() {
    var outputStr = "";
    for (var num = 1; num <= 200; num++) {
      var str = "";
      if (num % 3 == 0) str += "Fizz";
      if (num % 5 == 0) str += "Buzz";
      if (num % 7 == 0) str += "Boom";
      var num = 15;
      var str = "";
      if (num % 3 == 0) {
          str += "Fizz";
      } if (num %5 == 0) {
         str += "Buzz";
      }
      
      console.log(str);
  
      outputStr += "<p>" + num + " " + str + "</p>\n"
      
     // or use this line instead:
     // $("#output").append("<div>" + num + ": "+str+"</div>");
  }
  
  fizzBuzzBoom();
}



