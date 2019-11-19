//getting the current date and time]
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];//array days of week starting with 0. index 0 = sun...
var now = new Date();//creates a new date object and assigns to now.
console.log(now);//logs 2019-11-16T03:57:01.432Z
var theDay = now.getDay(); //extracts the day from the date object now and assigns to theDay as an index number
var nameOfDay = days[theDay];//assigns theDay number to days index resulting in name of the day of the week.
console.log(nameOfDay);//logs Sun (created on sunday, will change with actual days)

var rightNow = new Date();//creates a new date object.
rightNow = rightNow.toDateString(); //converts rightNow to a date string.
console.log(rightNow);//logs Sun Nov 17 2019


var dateString = new Date().toString();//creates a date object and converts to a string assinged to dateString
console.log(dateString);//logs Sun Nov 17 2019 18:38:12 GMT-0700 (Mountain Standard Time)


var date = new Date().toDateString();
console.log(date);//logs Sun Nov 17 2019

var date = new Date();
var secsSince = date.getTime() / 1000;
console.log(secsSince);

//Extracting parts of the date and time
var dateObject = new Date();
var day = dateObject.getDay();
console.log(day);// logs day of week indexed 0-6, 0 is sunday.
var month = dateObject.getMonth();
console.log(month);//logs month indexed 0 - 11, 0 is January.
var date = dateObject.getDate();
console.log(date);//logs day of the month indexed 1 - 31, 1 is the first of the month
var hours = dateObject.getHours();
console.log(hours);//logs hour of the day indeed 0 - 23, 0 is midnight, 12 is noon, 23 is 11pm
var minutes = dateObject.getMinutes();
console.log(minutes);//logs minutes indexed 0 - 59
var seconds = dateObject.getSeconds();
console.log(seconds);//logs seconds indexed 0 - 59
var milliSec = dateObject.getMilliseconds();
console.log(milliSec);//logs milliseconds indexed 0 - 999
var time = dateObject.getTime();
console.log(time);//logs milliseconds since midnight, jan 1, 1970

//assigns month name from date object
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
var dateO = new Date();//new date object
var monthNum = dateO.getMonth();//month assigned to monthNum 0 - 11
var monthName = month[monthNum];//month array assigned month number assigning monthName from array
console.log(monthName);

//determine days since your birthday
var today = new Date();
var birthday = new Date("September 4, 1975");
var milliSecToday = today.getTime();
var milliSecBDay = birthday.getTime();
var milliSecDif = milliSecToday - milliSecBDay;
var dayDif = milliSecDif / (1000 * 60 * 60 * 24);
console.log(Math.floor(dayDif));

//determine days since birthday production code.
var bDayDiff = new Date().getTime() - new Date("September 4, 1975");
var daysSinceBirthday = Math.floor(bDayDiff / (1000 * 60 * 60 * 24));
console.log(daysSinceBirthday);

//determines days since nove 17 to present and rounds down.
var date = new Date("November 17, 2019").getTime();
var today = new Date().getTime();
console.log(Math.floor((today / (1000 * 60 * 60 * 24)) - (date / (1000 * 60 * 60 * 24))));
