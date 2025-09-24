
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

/* Solution */

// Check the Coming Name
// if the name Stars with R or r , return PLays Banjo
// if not return doesn't play banjo

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() === "r" ? `${name} playing banjo` : `${name} doesn't play banjo`;
}
console.log(areYouPlayingBanjo("ami"));
