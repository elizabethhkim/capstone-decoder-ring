// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests by Liz", () => {
  describe("encoding a message", () => {
    
    it("should translate both 'i' and 'j' to 42", () => {
      const message = "kitten";
      const actual = polybius(message);
      const expected = "524244445133";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "a kitten";
      const actual = polybius(message);
      const expected = "11 524244445133";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const message = "a KITten";
        const actual = polybius(message);
        const expected = "11 524244445133";
  
        expect(actual).to.equal(expected);
      });
  });

  describe("decoding a message", () => {

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "42 42543444";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
        const message = "2345 23513434112251";
        const actual = polybius(message, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
      });


  });
});