const products = [
  { id: 1, name: "lenevo", price: 500 },
  { id: 2, name: "opppo", price: 5000 },
  { id: 3, name: "walton", price: 50000 },
];
const productSNmae = products.map((p) => p.name);
console.log(productSNmae);
const product = products.map((p) => p.price);
console.log(product);
const fil = products.filter((filter) => filter.price > 500);
console.log(fil);
// forEach

products.forEach((element) => console.log(element.id));

// reduce
const total = products.reduce((acum, cureent) => acum + cureent.price, 0);
console.log(total);
