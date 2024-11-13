/*
    lab.js - This simple JavaScript/jQuery script appends new elements to an output div

    Requirements: jQuery must be loaded for this script to work.

    Author: Athena Spencer
    Date: 11/11/24
*/

// Sorts the characters of a string in alphabetical order
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function() {
     //get value of input field
    const userName = $("#user-name").val();
    //sort name
    const userNameSorted = sortString(userName);
    //append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
