/*
  The function getMiddleChar should return the middle character of a string. If the string is of even length, return the middle two characters.
  It should ignore any whitespace and special characters.
  E.g.
  'hello world!!' should return 'ow'
*/

// PIOTR => please feel free to comment out things and make alterations to code 

function getMiddleChar(str) {
  
  const midIndex = Math.floor(str.length/2);
  const regex = new RegExp(/\w/i);
  let alphaNumArr = [];                    //stores only alpha numeric chars in the input string
  for ( let i=0; i< str.length ; i++){     // loop to filter out special characters and whitespaces
    if(str[i]=== regex){
      alphaNumArr.push(str[i]);
    }
  }
  //let alphaNumString = stringArr.filter(letter => (letter===regex));
  
  console.log( alphaNumArr);
  
  
  switch(str.length) {
    case 0:
      return str;
      break;
    case 1:
      if(str.length === alphaNumArr.length){
        return str;
        break;
      }else break;
    case 2:
      if(str.length === alphaNumArr.length){
        return str;
        break;
      }else break;
    default:
      break;

  }

  if(alphaNumArr.length%2){
    return alphaNumArr[midIndex];
  }else {
    return (alphaNumArr[midIndex-1]+alphaNumArr[midIndex]);
  }

}
const midChar = getMiddleChar("abc!");
console.log(`the middle char(s) is ${midChar}`);

module.exports = getMiddleChar;
