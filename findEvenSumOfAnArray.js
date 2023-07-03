// function of sorting even numbers of an array
function evenNumbersOfArray(numbers) {
  const evenArray = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
      evenArray.push(number);
    }
  }
  return evenArray;
}

// function of summation of even numbers of the sorting array
function sumOfEvenArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
  }
  return sum;
}

const numbersArray = [22, 44, 77, 96, 45, 99, 90, 123, 49, 68, 55, 70, 34, 88];
const fullEvenArray = evenNumbersOfArray(numbersArray);

const totalSumOfEvenArray = sumOfEvenArray(fullEvenArray);
console.log(totalSumOfEvenArray);
