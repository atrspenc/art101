/*
    lab.js - This simple JavaScript/jQuery script appends new elements to an output div

    Requirements: jQuery must be loaded for this script to work.

    Author: Athena Spencer
    Date: 11/18/24
*/

//Create a "FizzBuzz" function similar to how we did in class.
//Loop through numbers 1 to 200, listing them as you go
for (i=1; i <= 200; i++) {
    //If the number is a multiple of 3, if should print "Fizz!"
    if (i%3 == 0) {
        console.log("Fizz!");
    } //If the number is a multiple of 5, it should print "Buzz!"
    else if (i%5 == 0) {
        console.log("Buzz!");
    }
    //If the number is a multiple of 7, it should print "Boom!"
    else if (1%7 == 0) {
        console.log("Boom!");
    }
    
    }
}



//If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
