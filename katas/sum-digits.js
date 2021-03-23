/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
  let sum = 0;
  let numStr = Math.abs(num).toString();
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== ".") {
    sum += parseInt(numStr[i]);
    };
    //console.log(`Run ${i}, our "i" is ${i}, our sum is ${sum}`);

  }
  return sum;
  
};

console.log(sumDigits(-199));



module.exports = sumDigits;


// TEST 1 - sumDigits returns the input number when passed a single digit number
// This test has two ASSERTIONS being made
// The same behaviour is being tested but with different inputs - 1 and 9

// HAPPY OUTPUT:
