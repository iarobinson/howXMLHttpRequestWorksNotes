//
// /////////////HOW A XMLHttpRequest WORKS\\\\\\\\\\\\\\\\\
// // Start with the URL you will call to the API
// //  by creating a variable with a string.
// var url = "http://someserver.com/data.json";
//
// // Create a request object. Firs assign the
// //  variable to a request. We use XMLHttpRequest to
// //  create a new request object.
// var request = new XMLHttpRequest();
//
// // Now we tell the object which URL we want it to
// //  pull info from. Though it's called 'open', that
// //  isn't what it actually does. It saves the method
// //  for making an open request later.
// request.open("GET", url);
//
// // Now we provide a handler that executes when the
// //  data arrives.
// request.onload = function() {
//   if (request.status == 200) {
//     alert(request.responseText);
//   }
// };
// // Now request carries and object that looks like the following:
// //  request = { method: "GET", URL: "http//....", onload: request.onl... };
//
// // Now we tell the request to get data using a send method
// //  Our send function has null because we're not sending data, just
// //  receiving it.
// request.send(null);
//
// // REVIEW
// // 1. Create XMLHttpRequest object
// // 2. Load the object with URL and HTTP request type
// // 3. Load the object with a handler
// // 4. Send the request and wait for it to process
// // 5. Once request is loaded, the handler should run
//
//
//
// /////////////FORMAT FOR A XMLHttpRequest\\\\\\\\\\\\\\\\\
// // Feeling luck APP
// window.onload = function() {
//   var url = "http://wickedlysmart.com/ifeellucky";
//   var request = new XMLHttpRequest();
//   request.onload = function () {
//     if (request.status == 200) {
//       displayLuck(request.responseText)
//     }
//   };
//   request.open("GET", url);
//   request.send(null);
// }
//
//
//
// function displayLuck(luck) {
//   var p = document.getElementById("luck");
//   p.innerHTML = "Today you are " + luck;
// }
//
// /////////////OBJECT to STRING PRACTICE\\\\\\\\\\\\\\\\\
//
// // First we create the Movie object constructor
// function Movie(title, genre, rating, showtimes) {
//   this.title = title;
//   this.genre = genre;
//   this.rating = rating;
//   this.showtimes = showtimes;
// }
//
// // Now we create an instance of a movie
// var plan9Movie = new Movie("Plan 9 from Outer Space", "Cult Classic", 2, ["3:00 pm", "7:00pm", "11:00pm"]);
//
// // We log these to see the object's makeup and the type of object she is.
// console.log(plan9Movie);
// console.log(typeof plan9Movie);
//
// // Now we create a JSON string from the object
// var pln9String = JSON.stringify(plan9Movie);
//
// // We log these to see the strings's makeup and the type of object she is.
// console.log(pln9String);
// console.log(typeof pln9String);
//
// // Now we convert that string back to object form
// var plan9MovieBackToJSON = JSON.parse(pln9String);
//
// // When we log it back, we have our original JSON
// console.log(plan9MovieBackToJSON);
// console.log(typeof plan9MovieBackToJSON);
