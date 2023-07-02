// function isEven(number) {
//   const remainder = number % 2;
//   if (remainder === 0) {
//     console.log("Number is even");
//   } else {
//     console.log("number is odd");
//   }
// }

function isEven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

const myNumberIsEven = isEven(57);
const herNumberIsEven = isEven(56);
console.log(myNumberIsEven);
console.log(herNumberIsEven);
