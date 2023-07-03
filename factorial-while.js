// factorial by using while loop

function factorial(number) {
  let num = 1;
  let result = 1;
  while (num <= number) {
    result = result * num;
    num++;
  }
  return result;
}

const result = factorial(8);
console.log(result);
