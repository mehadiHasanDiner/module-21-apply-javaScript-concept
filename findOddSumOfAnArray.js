// function of summation of the odd numbers
function getSumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const number = numbers[i];
    sum = sum + number;
    // console.log(index, sum);
  }
  return sum;
}

// function of sorting odd numbers of an array
function findOddSumOfAnArray(numbers) {
  let totalNumbersArray = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 1) {
      totalNumbersArray.push(number);
    }
  }
  return totalNumbersArray;
}

const numbersArray = [22, 23, 24, 25, 26, 27, 28, 29, 30];
const sumOfOddNumbers = findOddSumOfAnArray(numbersArray);
const totalSum = getSumOfAnArray(sumOfOddNumbers);

console.log(sumOfOddNumbers);
console.log(totalSum);
