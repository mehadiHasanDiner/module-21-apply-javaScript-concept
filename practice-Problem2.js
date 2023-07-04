function findLeapYear(years) {
  const allLeapYears = [];
  for (let i = 0; i < years.length; i++) {
    const year = years[i];
    if (year % 4 === 0) {
      allLeapYears.push(year);
    }
  }
  return allLeapYears;
}

const leapYearArray = [2023, 2024, 2025, 2028, 2030];
const allLeapYearArray = findLeapYear(leapYearArray);
console.log(allLeapYearArray);
