// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope


  // new function to test if subAlphabet is not all unique characters with a function to be called later
  function isUnique(str) {
    let obj = {}  
    for (let i=0; i<str.length; i++) {
      let letter = str[i]
      if (obj[letter]) return false
      obj[letter] = true
      }
      return true
  }

  function substitution(input, alphabet, encode = true) {
    // define the standard alphabet and set it as the starting alphabet 
    const standard = "abcdefghijklmnopqrstuvwxyz"
    let startingAlph = standard.split("")
    if (!alphabet || alphabet.length !== 26 || !isUnique(alphabet)) return false
    // put substitution alphabet into an array 
    let subAlph = alphabet.toLowerCase().split("")
    const message = input.toLowerCase().split("")

    // if decoding, switch the starting and substituting alphabet

    if (!encode) {
      startingAlph = subAlph
      subAlph = standard.split("")} 


    //loop through the message array to access each letter and use reduce to build an encoded message
    const resolvedMessage = message.reduce((acc, letter) => {
          let position = startingAlph.findIndex(stdLetter => stdLetter === letter)
          // subLetter is set based on the position in the sub alphabet. if undefined, set to " "
          let subLetter = subAlph[position] || " "
          acc+=subLetter
          return acc
      }, "")
    
    return resolvedMessage
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
