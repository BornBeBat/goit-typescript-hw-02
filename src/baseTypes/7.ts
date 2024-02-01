/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

function isWeekend(day: Day): boolean {
  if (day === Day.Sun || day === Day.Sat) return true;
  return false;
};

console.log(isWeekend(Day.Mon));
console.log(isWeekend(Day.Tue));
console.log(isWeekend(Day.Wed));
console.log(isWeekend(Day.Thu));
console.log(isWeekend(Day.Fri));
console.log(isWeekend(Day.Sat));
console.log(isWeekend(Day.Sun));