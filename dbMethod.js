'use strict';

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function (query) {

    let result = this.store.heroes.find((hero) => {

      for (let key in query) {

        if (Object.keys(hero).includes(key) === false || hero[key] !== query[key] ) {
          return false;
        }
      }

      return true;
    });

    return result || null;
  }
};

console.log(Database.findOne({ id: 1 }));
console.log(Database.findOne({ id: 10 }));
console.log(Database.findOne({ id: 2, name: 'Aquaman' }));
console.log(Database.findOne({ id: 5, squad: 'Justice League' }));
console.log(Database.findOne({ squad: 'Justice League' }));
