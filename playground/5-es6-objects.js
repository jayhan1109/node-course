// Object property shorthand

const name = "Jay";
const age = 23;

const user = {
  name,
  age,
  location: "Seoul",
};

console.log(user);

// Object destructing

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const { label: productLabel, stock, rating } = product;
console.log(productLabel);
console.log(stock);
console.log(rating);
