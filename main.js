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



// צור פונקציה המקבלת מהמשתמש תאריך כסטרינג ומחזירה את החודש
// function getFromUserTheMonth(){
// var someMonth = new Date(prompt("type some Date"))
// return someMonth.getMonth()
// }
// getFromUserTheMonth();




// צור פונקציה המקבלת מהמשתמש תאריך כסטרינג ומחזירה את השעה

// function getFromUserTheHouer(){
// var getTheHours = new Date(prompt("type some date"));
// return getTheHours.getHours();
// }
// getFromUserTheHouer();





// צור פונקציה המקבלת מהמשתמש תאריך כסטרינג ומחזירה את השנה

// function getTheYear(){
// var someYear = new Date(prompt("type some date"))
// return someYear.getFullYear()
// }
// console.log(getTheYear());


// צרו פונקציה הקולטת מהמשתמש תאריך כסטרינג ומחזירה את הדקות.
// function getTheMinits(){
// var user1 = new Date(prompt("type some date"))
// return user1.getMinutes()

// }
// getTheMinits()



// צרו פונקציה הקולטת מהמשתמש 2 תאריכים כסטרינג ומחזירה את המוקדם מביניהם.
// function returnTheEarliersBetween(){
// var user1 = new Date(prompt("type some date"))
// var user2 = new Date(prompt("type some date"))
// if(user1<user2){
// return user1
// }
// else{
// return user2
// }

// }
// returnTheEarliersBetween();




// צרו פונקציה הקולטת מהמשתמש תאריך כסטריג ומחזירה את הגיל שלו

// function getUserAge(){
// var userDate = new Date(prompt("type a date"))
// return new Date().getFullYear - userDate.getFullYear

// }
// getUserAge()



// 172	Date	צרו פונקציה הקולטת מהמשתמש תאריך כסטרינג, אם המשתמש מעל 18 היא מדפיסה alert שהוא רשאי להיכנס אחרת מדפיסה הודעה שהמשתמש לא רשאי.	

// function getDateFromUser(){
// var userDate = new Date(prompt("type a date"))
// var useryear = userDate.getFullYear();
// if(userDate>useryear){
//     alert("you are allow to get the site")
// }
// else{
//     console.log("you are not allow to get in the site")
// }

// }
// getDateFromUser();


// Date	צרו פונקציה שיוצרת אובייקט של Date ומדפיסה למסך את המיקום של המשתמש.

// function getLocation() {
//   var myDate = new Date()
//   navigator.geolocation
//   navigator.geolocation.getCurrentPosition(console.log,console.log,myDate)
// }
// getLocation();




// צרו פונקציה שיוצרת תאריך רנדומלי בין 31/01/1990 ל 31/01/2022 ומדפיסה את התוצאה.

// function getRndNum(){
//     // יצירת חודש רנדומלי בין 0-11
//   var rndMonth= Math.floor(Math.random()*12);
//    // יצירת יום רנדומלי בין 1-31
//   var rndDay = Math.floor(Math.random()*(31-1)+1);
//   // יצירת יום רנדומלי בשבוע בין 0-6
//   var dateStr= rndMonth+"/"+rndDay+"/1996";
//   // יצירת אובייקט חדש ששומר את המשתנה שמחבר את כולם
//   var date = new Date(dateStr);

//   return date;
// }
// getRndNum();




// var monthDate = Math.floor(Math.random()*12);
// var dayDate = Math.floor(Math.random()*(31-1)+1);
// var dateStr = dayDate +"/"+monthDate+"/1997"
// var myDate = new Date(dateStr);
