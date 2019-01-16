'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  for(let i = 0; i < arr.length; i++){
    const hero = arr[i];
    for(let k1 in query){
      if(Object.keys(hero).includes(k1) === false){
        console.log(hero[k1]);
        return null;
      }
    }
    for(let k2 in query){
      if(hero[k2] !== query[k2]){
        console.log(hero[k2], query[k2]);
        return null;
      }

    }
    return hero;
  }
}
findOne(HEROES, { id: 5});
