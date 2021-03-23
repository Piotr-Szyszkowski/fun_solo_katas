const sumDigits = require('../katas/sum-digits');

describe("sumDigits", () => {
  it("TEST 1 - sumDigits returns the input number when passed a single digit number", () => {
    let actualOutput = sumDigits(1);
    let expectedOutput = 1;
    expect(actualOutput).toEqual(expectedOutput);
  });
});

// Tests for sumDigits
// NOTE: the tests below use a function called JSON.stringify - this is just there to
// preserve the output array brackets in the printed string.  You don't have to worry about using this yourself.

// TEST 1 - sumDigits returns the input number when passed a single digit number
// This test has two ASSERTIONS being made
// The same behaviour is being tested but with different inputs - 1 and 9
/*console.log(
  'TEST 1 - sumDigits returns the input number when passed a single digit number\n'
);
let input = 1;
let expectedOutput = 1;
let actualOutput = sumDigits(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

// Second ASSERTION for TEST 1
input = 9;
expectedOutput = 9;
actualOutput = sumDigits(input);
console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

/// TEST 2 - sumDigits returns the sum of input number when passed a multi digit number that's no a float

// first assertion for TEST 2

console.log(
  "TEST 2 - sumDigits returns the sum of input number when passed a multi digit number that's no a float\n"
);
input = 11;
expectedOutput = 2;
actualOutput = sumDigits(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

// second ASSERTION for TEST 2
input = 999;
expectedOutput = 27;
actualOutput = sumDigits(input);
console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

/// TEST 3 - sumDigits returns the sum of input number when passed a multi digit number that's a float

// first ASSERTION for TEST 3

input = 99.9;
expectedOutput = 27;
actualOutput = sumDigits(input);
console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

// TEST 4 - sumDigits returns the sum of input number when passed a multi digit number that's a negative

// first ASSERTION for TEST 4

input = -199;
expectedOutput = 19;
actualOutput = sumDigits(input);
console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);


/*
  Once you have got the first test passing, then you can write your next one.
  If you've already handled a single digit, your next test could test for multi-digit inputs.

  E.g. sumDigits(99) should output 18
  E.g. sumDigits(123) should output 6

  HINT: Remember to see the test *fail* first, then write the code to pass the test

  Why this test?  
  A multi-digit input means you now have to implement to 'addition' part of this function,
  but you don't have to think about the logic for dealing with/ignoring non-digit characters yet
  (that's for our next test!)
  */

/*
  Once you have successfully passed the above test, then you can write your next test.
  A good next test might be to check that your function handles non-numerical characters correctly (i.e. ignores them)
  
  E.g. sumDigits(10.5) should output 6
  */
 
