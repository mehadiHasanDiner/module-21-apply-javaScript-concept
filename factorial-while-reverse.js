// // factorial in a reverse way by using while loop
function factorial(number) {
  let i = number;
  let result = 1;
  while (i >= 1) {
    result = result * i;
    i--;
  }
  return result;
}

const fact = factorial(6);
console.log(fact);
