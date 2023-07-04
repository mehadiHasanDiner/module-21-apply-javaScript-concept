function hourConverter(hours) {
  const minutes = hours * 60;
  return minutes;
}

const myHours = 5;
const totalMinutes = hourConverter(myHours);
console.log("My total minutes is:", myHours, "hour", totalMinutes, "minutes");
