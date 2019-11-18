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


