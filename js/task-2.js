'use strict';
function calcAverageCalories(days) {
    if (days.length === 0) {
        return 0;
    }
    let totalCalories = 0;
    for (const day of days) {
        totalCalories += day.calories;
    }
    return totalCalories / days.length;
}
console.log(calcAverageCalories([{ day: 'Monday', calories: 2000 },
     { day: 'Tuesday', calories: 2500 },
      { day: 'Wednesday', calories: 1800 }])); // 2100
console.log(calcAverageCalories([{ day: 'Thursday', calories: 2200 },
     { day: 'Friday', calories: 2000 }])); // 2100
     console.log(calcAverageCalories([{ day: 'Saturday', calories: 1900 },
      { day: 'Sunday', calories: 2100 }])); // 2000