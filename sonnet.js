
// Take the contents of the sonnet div and place it in a variable
var sonnetOuter = document.getElementById("sonnet");
// console.log("sonnetOuter", sonnetOuter);

var sonnet = sonnetOuter.innerHTML;
// console.log("sonnet", sonnet);

// Find and output the starting position of the word "orphans"
var orphansLoc = sonnet.indexOf("orphans");
// console.log("orphans location", orphansLoc);

// Output the number of characters in the sonnet
console.log("Length of sonnet", sonnet.length);

// Replace the first occurance of the string "winter" with "yuletide"
var winter = sonnet.replace("winter", "yuletide");
// console.log("replace Winter", winter);

// Replace all occurances of the string "the" with "a large"
winter += sonnet.replace(/[T|t]he /g, "a large ");
// console.log("the to large", theUpdate);

// Set the content of the sonnet div with the new string

sonnetOuter.innerHTML = winter;