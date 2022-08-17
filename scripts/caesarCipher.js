const caesarCipher = function(string, shiftingValue) {
    if (shiftingValue < 0) {
        return caesarCipher(string, shiftingValue + 26); // 26 letters at Alphabet
    }

    let outputString = ''; //empty string defined to be used in ciphering

    for (let i = 0; i < string.length; i++) {
        let character = string[i]; //Get the characters
        
        if (character.match(/[a-z]/i)) { // If it's a letter (prevents punctuations counted)
          let code = string.charCodeAt(i); //Get its equivalent code
          
            if (code >= 65 && code <= 90) { //Check for Uppercase letters
            character = String.fromCharCode(((code - 65 + shiftingValue) % 26) + 65);
            }
    
            else if (code >= 97 && code <= 122) { //Check for Lowercase letters
            character = String.fromCharCode(((code - 97 + shiftingValue) % 26) + 97);
            }
        }
        outputString += character; //Append characters into outputString
    }
    return outputString;
};

// Do not edit below this line
module.exports = caesarCipher;