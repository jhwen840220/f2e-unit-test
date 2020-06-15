import myAtoi from "./string-to-integer.js";


describe("String to Integer (atoi)", () => {
    test("Input:42, target=42", () => {
       //arragne
       const input = "42"
       const expected = 42
       //actual
       //assert
      expect(myAtoi(input)).toEqual(expected);
    });

    test("Input:-42, target=-42", () => {
      //arragne
      const input = "-42"
      const expected = -42
      //actual
      //assert
     expect(myAtoi(input)).toEqual(expected);
    });

    test("Input:4193 with words, target=4193", () => {
      //arragne
      const input = "4193 with words"
      const expected = 4193
      //actual
      //assert
     expect(myAtoi(input)).toEqual(expected);
    });
    test("Input:words and 987, target=0", () => {
      //arragne
      const input = "words and 987"
      const expected = 0
      //actual
      //assert
     expect(myAtoi(input)).toEqual(expected);
    });
    test("Input:-91283472332, target=-2147483648", () => {
      //arragne
      const input = "-91283472332"
      const expected = -2147483648
      //actual
      //assert
     expect(myAtoi(input)).toEqual(expected);
    });

    test('Input:2147483648, target=2147483647', () => {
      const input = '2147483648'
      const expected = 2147483647
      expect(myAtoi(input)).toEqual(expected)
    });

    test('Input:+0 000000000012345678, target=0', () => {
        const input = '  +0 000000000012345678'
        const expected = 0
        expect(myAtoi(input)).toEqual(expected)
    });

    test('Input:.1, target=0', () => {
        const input = ' .1'
        const expected = 0
        expect(myAtoi(input)).toEqual(expected)
    });
  });