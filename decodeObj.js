'use strict';

const inputCypher = 'craft block argon meter bells brown croon droop';

const valueTable = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};



const decodeWord = function (word) {
  let result = ' ';
  for(let prop in valueTable){
    if(prop === word[0]){
      return word[valueTable[prop]-1];
    } 
  }
  return result;
};

const decodeStr = function (input) {
  return input.split(' ').map(decodeWord).join('');
};

console.log(decodeStr(inputCypher));