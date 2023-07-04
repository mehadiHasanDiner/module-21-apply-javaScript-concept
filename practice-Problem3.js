// sorting odd number's array from the given array
function oddArraySort(array) {
  const oddFullArray = [];
  for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    if (arrayElement % 2 === 1) {
      oddFullArray.push(arrayElement);
    }
  }
  return oddFullArray;
}

// summation of sorted of odd arrays
function findOddArraySum(oddArray) {
  let sum = 0;
  for (let i = 0; i < oddArray.length; i++) {
    const arrayElement = oddArray[i];
    sum = sum + arrayElement;
  }
  return sum;
}

const givenArray = [5, 7, 8, 10, 45, 30];
const oddArray = oddArraySort(givenArray);
const totalSum = findOddArraySum(oddArray);
console.log(totalSum);
