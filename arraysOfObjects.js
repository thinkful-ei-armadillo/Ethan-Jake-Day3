'use strict';
const people = [
  {
    name: 'Bob',
    jobTitle: 'Mananger' ,
  },
  {
    name: 'Bill' ,
    jobTitle: 'Associate' ,
  },
  {
    name: 'Steve' ,
    jobTitle: 'VP' ,
  },
  {
    name: 'Joe' ,
    jobTitle: 'President' ,
  },
  {
    name: 'Randy' ,
    jobTitle: 'CEO' ,  
  }
];

people.forEach((person) => {
  console.log(person.name, person.jobTitle);
});