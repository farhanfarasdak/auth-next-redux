// Object
// const person = {
//   name: 'Farhan',
//   greet() {
//     return `My name is ${this.name}`;
//   },
// };
// console.log(person.greet());
// const mimick = person.greet.bind(person);
// console.log(mimick());

// Class
class Human {
  constructor(name) {
    this.name = name;
    // this.greet = this.greet.bind(this);
  }

  greet() {
    return `My name is ${this.name}`;
  }
}

const person = new Human('Farhan');
console.log(person.name);
console.log(person.greet());
// const mimick = person.greet;
const mimick = person.greet.bind(person);
console.log(mimick());
