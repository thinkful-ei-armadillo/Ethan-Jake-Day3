'use strict';
const people = [
  {
    name: 'Bob',
    jobTitle: 'Mananger' ,
    boss: 'Randy',
  },
  {
    name: 'Bill' ,
    jobTitle: 'Associate' ,
    boss: 'Bob',
  },
  {
    name: 'Steve' ,
    jobTitle: 'VP' ,
    boss: 'Joe',
  },
  {
    name: 'Joe' ,
    jobTitle: 'President' ,
    boss: 'Randy',
  },
  {
    name: 'Randy' ,
    jobTitle: 'CEO' ,
  }
];

people.forEach((person) => {

  let message = null;

  if (!person.boss) {
    message = `${person.jobTitle} ${person.name} doesn't report to anybody.`;
  } else {
    message = `${person.jobTitle} ${person.name} reports to ${person.boss}.`;
  }

  console.log(message);
});
