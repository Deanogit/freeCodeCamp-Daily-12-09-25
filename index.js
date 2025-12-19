// Screen Time
// Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

// If any single day has 10 hours or more, it's too much.
// If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
// If the average of the seven days is greater than or equal to 6 hours, it's too much.

function tooMuchScreenTime(hours) {
  console.log(hours);

  for (let i = 0; i < hours.length; i++) {
    // if (hours[i] >= 10) {
    if (hours[i] >= 10) {
      // return false
      return false;
      // else if (arr[i] + arr[i + 1] + arr[i + 2] >= 24){
    } else if (hours[i] + hours[i + 1] + hours[1 + 2] >= 24) {
      // return false
      return false;
      // } else if (arr.reduce((a, b) => a + b) >= 42) {
    } else if (hours.reduce((a, b) => a + b) >= 42) {
      //  return false
      return false;
    } else {
      return true;
    }
    // }
    // }

    // return hours;
  }
}
