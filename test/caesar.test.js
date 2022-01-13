// Write your tests here!
const { expect } = require("chai")
const { caesar } = require("../src/caesar")

describe("caesar() tests by Liz", () => {
    describe("error handling", () => {
        it("should return false if the shift amount is 0", () => {
        const message = "tuxedo cat"
        const shift = 0
        const actual = caesar(message, shift)

         expect(actual).to.be.false;
        })

    it("should return false if the shift amount is less than -25", () => {
        const message = "tuxedo cat"
        const shift = -26
        const actual = caesar(message, shift)
  
        expect(actual).to.be.false;
      })

    it("should return false if the shift amount is greater than 25", () => {
        const message = "tuxedo cat"
        const shift = 26
        const actual = caesar(message, shift)
  
        expect(actual).to.be.false;
      })

    it("should return false if the shift amount is not present", () => {
        const message = "tuxedo cat"
        const actual = caesar(message)
  
        expect(actual).to.be.false;
      })
    })
    
    describe("encoding a message", () => {
    it("should ignore capital letters", () => {
        const message = "TUXEDO Cat";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "wxahgr fdw";
  
        expect(actual).to.equal(expected);
      })
    it("should appropriately handle letters at the end of the alphabet", () => {
        const message = "tuxedo cat";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "wxahgr fdw";
  
        expect(actual).to.equal(expected);
      });

    it("should maintain spaces and other nonalphabetic symbols in the message before and after encoding", () => {
        const message = "tuxedo cat!!";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "wxahgr fdw!!";
  
        expect(actual).to.equal(expected);
    })
  })
  describe("decoding a message", () => {
    it("should maintain spaces and other nonalphabetic symbols in the message before and after decoding", () => {
        const message = "wxahgr fdw!!";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "tuxedo cat!!";
  
        expect(actual).to.equal(expected);
    })

    it("should ignore capital letters", () => {
        const message = "WxAHgr fdw";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "tuxedo cat";
  
        expect(actual).to.equal(expected);
      })

  })
})
