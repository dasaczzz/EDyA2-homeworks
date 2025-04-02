// Regular Function
function isOddOrEven(num) {
  if (num % 2 === 0) {
      console.log(`${num} is even`);
  } else {
      console.log(`${num} is odd`);
  }
}

// Arrow Function
const verificarParOImpar = (num) => {
  console.log(`${num} es ${num % 2 === 0 ? "even" : "odd"}`);
};