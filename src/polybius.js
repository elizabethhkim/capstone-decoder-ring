// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {



  function polybius(input, encode = true) {
    // define the letter-number pair within an object
    const numberLetters = {
      'a': 11,'b': 21,'c': 31,'d': 41, 'e': 51,'f': 12,'g': 22,'h': 32,'i': 42,'j': 42,'k': 52,'l': 13,'m': 23,'n': 33,'o': 43, 'p': 53,'q': 14,
      'r': 24, 's': 34,'t': 44,'u': 54,'v': 15,'w': 25,'x': 35,'y': 45,'z': 55
    }
    
    // if encode, split the input into an array and use reduce to loop through the input array
    if(encode) {
      let message = input.toLowerCase().split("")
      const encodedArray = message.reduce((acc,letter) => {
        // push the matching number value to the accumulator, if undefined push a space
        let matchingNum = numberLetters[letter] || " "
        acc.push(matchingNum)
        return acc
      }, [])
      // return the joined encoded array
      return (encodedArray.join(""))
    
    // else if encode = false
    } else {
      // if number of characters without spaces is even, return false
      if(input.split(" ").join("").length%2 === 1) {return false}
      // add additional space so that a space is pushed into the array when going by intervals of 2
      input = input.split(" ").join("  ")

      // create an array for the input in paired numbers
      let message = []
      for (let i =0; i < input.length; i+=2) {
        message.push(input.slice(i, i+2))
      }
      // use reduce to create an array with the matching letters, make sure to push spaces as well
      const decodedArray = message.reduce((acc, number) => {
        if(number === "  ") {
          acc.push(" ")
        }

        // if not a blank space, loop through the letter-number object and if the numbers match, push the matching letter into the array
        for (letter in numberLetters) {
        if (numberLetters[letter]==number) {
            let matchingLetter = letter
            acc.push(matchingLetter)
          } 
        } 
        return acc
      }, [])
      // return the joined decoded array
      return (decodedArray.join(""))

    }
    
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
