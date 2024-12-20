/*
    lab.js - This simple JavaScript/jQuery script appends new elements to an output div

    Requirements: jQuery must be loaded for this script to work.

    Author: Athena Spencer
    Date: 11/18/24
*/ab

function fuzzBuzz() {
    let oneLongString;
    for (i = 1; i <= 200; i++) {
        if (i % 105 == 0) {
            oneLongString += "FizzBuzzBoom!<br>";
        } else if (i % 35 == 0) {
            oneLongString += "BuzzBoom!<br>";
        } else if (i % 21 == 0) {
            oneLongString += "FizzBoom!<br>";
        } else if (i % 15 == 0) {
            oneLongString += "Fizzbuzz!<br>";
        } else if (i %7 == 0) {
            oneLongString += "Boom!";
        } else if (i % 5 == 0) {
            oneLongString += "Buzz!";
        } else if (i % 3 == 0) {
            oneLongString += "Fizz!";
        } else {
            oneLongString += " " + i;
        }
        $("#output").html(oneLongString);
    }
}

fuzzBuzz();
