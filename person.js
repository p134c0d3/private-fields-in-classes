class Person {
  #id;
  constructor(id) {
    const randomVal = id * Math.floor(Math.random())
    this.#id = randomVal

  }

  get getID() {
    return this.#id;
  }
}

const person1 = new Person(22);
const person2 = new Person(12);
console.log(person1.getID);
console.log(person2.getID);

module.exports = Person;
