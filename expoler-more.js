/*
 var let const
 var---->cant not use this 
 let ---->  re asin korte pabo 
 const ---.re ain korte pabo na 
 

*/
const a = 56;
const number = [20, 20, 30, 1040, 20, 45];
const person = {
  name: "Sakib Khan",
};

const message = `hi ${person.name} has ${a} acces to number ${number[4]}`;
console.log(message);

// arrow function

const square = (a) => a * a;
console.log(square(4));
const double = (a, b) => a + b;
