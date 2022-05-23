// צרו פונקציה שמדפיסה לקונסול את התאריך והשעה בעת הפעלתה
// function printTheDateAndTime(){
// var dateAndTime =  Date()
// console.log(dateAndTime)
// }
// printTheDateAndTime();





// צרו פונקציה המקבלת תאריך כסטרינג ומדפיסה אותו לקונסול אובייקט  של DATE עם אותו תאריך שהתקבל בפונקציה
// function getTheDate(myDate){
// console.log(new Date(myDate))
// }
// getTheDate(Date(3/31/2022))





// צרו פונקציה הקולטת מהמשתמש תאריך כסטרינג ומדפיסה לקונסול אובייקט של date
// function getDateFromUser(){
// var someDate = new Date(prompt("type the date"))
// console.log(someDate)
// }
// getDateFromUser();




function getFromUserTheMonth(){
var someMonth = new Date(prompt("type some Date"))
var tempMonth = someMonth.getMonth()
return tempMonth
}
getFromUserTheMonth();