/* Standings:
- 2.0 or higher - good standing
- less than 2.0 - academic probation

Honors recognitions:

- 3.40 to 3.59 - cum laude
- 3.60 t0 3.79 - magna cum laude
- 3.80 to 4.00 or higher - summa cum laude

Given a GPA, your job is to print whether or not the student is in good standing. If the student has earned honors recognitions print those out too.

For example:

- A GPA of 2.5 prints "Student is in good standing".
- A GPA of 1.9 prints "Student is on probation".
- A GPA of 3.6 prints "Student is in good standing with magna cum laude".
*/

function studentStatus (gpa) {
  if (gpa < 2.0) {
    return ('Student is on Academic probation')
  } else if (gpa >= 3.40 && gpa <= 3.59) {
    return ('Student is in good standing with cum laude')
  } else if (gpa >= 3.60 && gpa <= 3.79) {
    return ('Student is in good standing with magna cum laude')
  } else if (gpa >= 3.80 && gpa <= 4.00) {
    return ('Student is in good standing with summa cum laud')
  } else {
  }
  return ('Student is in good standing')
}

/* Loop from 0 to 99 and output the numbers that are multiples of 3. Do not use conditional statements. IE: 0, 3, 6, 9, 12, etc... */

for (var i = 0; i < 99; i += 3) {
  console.log(i)
}

/* In programming, dates are calculated by counting the number of milliseconds since the epoch. The epoch was midnight January 1st, 1970. The number of milliseconds since the epoch is called a timestamp. The following JavaScript code will get the current timestamp:
new Date().valueOf()
This returns something like "1482247094153" which stands for "Tue Dec 20 2016 09:44:53".
The new Date().valueOf() code can be treated like any other number. EG: new Date().valueOf() / 1000000 will divide the timestamp by 1,000,000.
Your job is to write a loop that outputs the timestamp continuously until the timestamp is cleanly divisible by 100. In other words, the time will be printed continuously until we find a time that has milliseconds of 00. */
function timeStamp () {
  for (var i = new Date().valueOf(); ; i++) {
    console.log(i)
    if ((i % 100 === 0)) {
      break
    }
  }
}
timeStamp()

/* Leap years are defined as being a year that is divisible by 4, except for years which are divisible by 100 and not divisible 400. */

function leapYear (year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
}
