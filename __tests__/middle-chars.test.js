//const { describe } = require('yargs'); - mac vs code adds this. please delete
//const { expect } = require('@jest/globals');

const middleChar = require("../katas/middle-char");

describe("Tests for middleChar", () => {
  it("TEST 1 - middleChar returns an empty string when passed an empty string\n", () => {
    let expectedOutput = middleChar("");
    let actualOutput = "";
    expect(expectedOutput).toEqual(actualOutput);
  });
  it("TEST 2 - middleChar returns input string when passed a string of length 1 or 2\n", () => {
    let expectedOutput = middleChar("a");
    let actualOutput = "a";
    expect(expectedOutput).toEqual(actualOutput);

    expectedOutput = middleChar("ab");
    actualOutput = "ab";
    expect(expectedOutput).toEqual(actualOutput);
  });
});
// Tests for middleChar
// NOTE: the tests below use a function called JSON.stringify - this is just there to
// preserve the output array brackets in the printed string.  You don't have to worry about using this yourself.

// TEST 1 - middleChar returns an empty string when passed an empty string
// console.log(
//   'TEST 1 - middleChar returns an empty string when passed an empty string\n'
// );
// let input = '';
// let expectedOutput = '';
// let actualOutput = middleChar(input);

// console.log(
//   `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
//     expectedOutput
//   )} \n`
// );

/*
  Once you have got the first test passing, then you can write your next one.
  A good next test might be to check that your function returns the whole input if input length is less than 3:

  E.g. middleChar('a') should output 'a'
  E.g. middleChar('ab') should output 'ab'

  Why this test? 
  With this test, we need to still need to start considering our input (not just returning "") and its length
  but we haven't jumped to extracting it middle values yet
  */

/*
  Once you have got that test passing, then you can write your next one.
  A good next test might be to check that your function returns the single middle character when passed an odd-length string:

  E.g. middleChar('pig') should output 'i'

  Why this test? 
  We've reached the point we need to extract out the middle character from our input,
  but with odd length strings we don't yet have the complexity of having to extract out two if it's an even input
  */

/*
  Once you have got the first test passing, then you can write your next one.
  A good next test might be to check that your function returns the two middle characters when passed an even-length string:

  E.g. middleChar('goat') should output 'oa'

  Why this test?
  We need to be sure our function works for even length strings as well as odd.
  */

/*
  Once you have got the first test passing, then you can write your next one.
  A good next test might be to check that your function returns correct characters, ignoring whitespace:

  E.g. middleChar('hello world') should output 'ow'

  Why this test?
  Now we are happy that the function works for odd and even length strings, we can introduce more complex features
  such as ignoring whitespace (this test) and ignoring special characters (next test). 
  */

/*
  Once you have got the first test passing, then you can write your next one.
  A good next test might be to check that your function returns correct characters, ignoring special characters:

  E.g. middleChar('Northcoders!!') should output 'c'
  */
