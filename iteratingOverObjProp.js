'use strict';

const object = {
  foo: 'one',
  bar: 'two',
  fum: 'three',
  quux: 'four',
  spam: 'five'
};

for(let prop in object){
  console.log(prop, object[prop]);
}