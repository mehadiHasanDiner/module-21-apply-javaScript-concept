// function isLeapYear(year) {
//   const remainder = year % 4;
//   if (remainder === 0) {
//     console.log("Your year is leap year", year);
//   } else {
//     console.log("Your year is not leap year", year);
//   }
// }

// isLeapYear(1240);

function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

const isMyYearLeapYear = isLeapYear(1240);
console.log("my year", isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(2030);
console.log("her year", isHerYearLeapYear);
