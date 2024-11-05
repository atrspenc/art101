// index.js - Lab 9 Libraries and jQuery
// Author: Athena Spencer
// Date: 4 November 2024

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function() {
    //now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
})

//for problem section
$("#problem").append("<button id='button-problem'>Make Special</button>");

// add a click listener to the challenge button
$("#button-problem").click(function() {
    //now add (or subtract) the "special" class to the section
    $("#problem").toggleClass("special");
})

//for relection section
$("#reflection").append("<button id='button-reflection'>Make Special</button>");

// add a click listener to the challenge button
$("#button-reflection").click(function() {
    //now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
})

//for results section
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the challenge button
$("#button-results").click(function() {
    //now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
})