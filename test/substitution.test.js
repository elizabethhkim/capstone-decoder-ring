// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests by Liz", () => {
    describe("error handling", () => {
      it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "message";
        const alphabet = "short";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
      it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "message";
        const alphabet = "xxxxyyyywwwwjjjjkkkklllloo";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
    })
    describe("encoding a message", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            const message = "message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";
      
            expect(actual).to.equal(expected);
          });

        it("should preserve spaces", () => {
            const message = "my message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet);
            const expected = "yp ysii.rs";
      
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const message = "MESSAge";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";
      
            expect(actual).to.equal(expected);
          });
    })
    describe("decoding a message", () => {
        it("should decode a message by using the given substitution alphabet", () => {
          const message = "ykrrpik";
          const alphabet = "plmoknijbuhvygctfxrdzeswaq";
          const actual = substitution(message, alphabet, false);
          const expected = "message";
    
          expect(actual).to.equal(expected);
        });

        it("should preserve spaces", () => {
            const message = "yp ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet, false);
            const expected = "my message";
      
            expect(actual).to.equal(expected);
          });

          it("should ignore capital letters", () => {
            const message = "YKRrpiK";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet, false);
            const expected = "message";
      
            expect(actual).to.equal(expected);
          });
    })

})