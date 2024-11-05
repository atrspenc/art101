// index.js - Lab 10 JavaScript for the Web
// Author: Athena Spencer
// Date: 7 November 2024

//create a little helper function that will generate fake dialogue
function generateRandomText(){
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    //get a random starting index to slice the Loren Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    //generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

//add an event listener for your button
// click listener for button
$("#make-convo").click(function(){
    });