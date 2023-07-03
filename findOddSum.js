function getSumOfAnArray(numbers) {
  let sum = 0;
  //   এখানে let sum = 0; for লুপের বাইরে ডিক্লেয়ার করা হয়েছে কারন লুপ ঘোরার সাথে sum এর মান ও চেঞ্জ যাতে না হয় কারন লুপ যখন চলবে তখন এর মানও চেঞ্জ হবে।
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
  }
  return sum;
  // এখানে return sum; লুপের বাইরে ডিক্লেয়ার করা হয়েছে কারন লুপ যখন চলবে তখন যদি সে return sum; পায় তাহলে সেখানেই সে লুপ স্টপ করে দেবে। লুপ যাতে শেষ পর্যন্ত ঘোরে তাই return sum; কে লুপের বাইরে রাখা হয়েছে।
}

const numbersArray = [22, 23, 24, 25, 26, 27, 28, 29, 30];

const totalSum = getSumOfAnArray(numbersArray);
console.log(totalSum);
