class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`Selipping Now ${this.name}`);
  }
}

const person = new Person("Kodom Ali", 5);
console.log(person);
person.sleep();
