'use strict';

const characters = [
  {
    name     : 'Gandalf the White',
    nickname : 'gandalf',
    race     : 'Wizard',
    origin   : 'Middle Earth',
    attack   : 10,
    defense  : 6,
    weapon   : 'wizard staff',
  },
  {
    name     : 'Bilbo Baggins',
    nickname : 'bilbo',
    race     : 'Hobbit',
    origin   : 'The Shire',
    attack   : 2,
    defense  : 1,
    weapon   : 'the Ring',
  },
  {
    name     : 'Frodo Baggins',
    nickname : 'frodo',
    race     : 'Hobbit',
    origin   : 'The Shire',
    attack   : 3,
    defense  : 2,
    weapon   : 'Barrow Blade',
  },
  {
    name     : 'Aragorn son of Arathorn',
    nickname : 'aragorn',
    race     : 'Man',
    origin   : 'Dunnedain',
    attack   : 6,
    defense  : 8,
    weapon   : 'Anduril',
  },
  {
    name     : 'Legolas',
    nickname : 'legolas',
    race     : 'Elf',
    origin   : 'Woodland Realm',
    attack   : 8,
    defense  : 5,
    weapon   : 'Bow and Arrow',
  },
];

const createCharacter = function (characterData) {

  return {
    name     : characterData.name,
    nickname : characterData.nickname,
    race     : characterData.race,
    origin   : characterData.origin,
    attack   : characterData.attack,
    defense  : characterData.defense,
    weapon   : characterData.weapon,
    describe : function () {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}.`);
    },
    evaluateFight: function (opponent) {

      let x = null;
      if (this.attack > opponent.defense) {
        x = this.attack - opponent.defense;
      } else {
        x = 0;
      }

      let y = null;
      if (this.defense < opponent.attack) {
        y = opponent.attack - this.defense;
      } else {
        y = 0;
      }

      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
    },
  };
};

characters.push({
  name     : 'Arwen Undomiel',
  nickname : 'No Man',
  race     : 'Half-Elf',
  origin   : 'Rivendell',
  attack   : 5,
  defense  : 5,
  weapon   : 'Hadhafang',
});

const personArray = characters.find((char) => { return char.nickname === 'aragorn'; });

const personObject = createCharacter(personArray);

personObject.describe();


const hobbits = characters.filter((char) => { return char.race === 'Hobbit'; });

// console.log(hobbits);

const units = characters.filter((char) => { return char.attack > 5; });

// console.log(units);


// console.log(characters[0]);

const obj = createCharacter(characters[0]);

obj.describe();
