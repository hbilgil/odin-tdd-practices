const reverseString = function(string) {
    let splitString = string.split(""); //splits a string into an array of substrings, and returns the array:
    let reverseString = splitString.reverse(); //reverses the order of the elements in an array
    let joinedString = reverseString.join(""); //returns an array as a string.
    return joinedString;
};

module.exports = reverseString;
  