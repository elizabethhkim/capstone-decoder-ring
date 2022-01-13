// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz"
  const alphabet = standardAlphabet.split("")
  function caesar(input, shift, encode = true) {
    // if no shift inputted, shift = 0, or abs value of shift > 25 => return false
    if(!shift || shift === 0 || shift < -25 || shift > 25) return false
    
    // if encode = false, shift the opposite way to decode
    if (!encode) {
      shift = -shift
    }
    const newMessage = [];
    //loop through each character in message
    for (let i = 0; i < input.length; i++) {
        if (alphabet.includes(input[i].toLowerCase())) {
          // find the beginning letter index
           let letterIndex = alphabet.findIndex(letter => letter === input[i].toLowerCase());
          //calculate the new letter index, adjusted for the shift
           let newLetterIndex = letterIndex + shift

           // if statement to go around the alphabet if new index is less than 0 or greater than 25
           if (newLetterIndex > 25) {
             newLetterIndex -= 26
           } else if (newLetterIndex < 0) {
             newLetterIndex +=26
           }
           //push the new letter at the new index into the new message
           newMessage.push(alphabet[newLetterIndex]);
        }
        else {
          newMessage.push(input[i]);
        }
      }
      return newMessage.join('');
    }

  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
