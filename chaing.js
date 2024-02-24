// data access

const data = [{ name: "shohel", sterct: "parbatipur" }];
// console.log(data[0].name);

const product = {
  count: 5000,
  data: {
    name: "hp",
    price: 12000,
    id: {
      data: "i phone",
      price: 14454,
    },
  },
};

console.log(product.data.id.price);
