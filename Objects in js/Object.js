// what is Object  in JS ?
// https://www.w3schools.com/js/js_objects.asp
// jis tarah hum ek variable me value ko store krwaty haun na es traha object me hum diffrent propertires or mrhtod kostore krwaty hain

// An object is a special data type in JavaScript that lets us store multiple values in one variable in the form of key-value pairs.

// Why Use Objects?
// To group related data together.
// To write cleaner and more organized code.
// To model real-world entities (like users, products, cars, etc).



// Syntax of Object:
// let person={
//     name:"Hamza",
//     agr:23,
//     height:5.9
// }
// console.log(person)




                   // Basic Concepts
// Concept	    Description	                    Example
// Accessing	Get data from object	        person.name or person["age"]
// Adding	    Add a new property	            person.country = "Pakistan"
// Updating	    Change value	                person.age = 24
// Deleting	    Remove a property	            delete person.isMarried


// 💡 Advanced Concepts
// 🔹 Methods
// Functions written inside an object.
// const user = {
//     name: "Hamza",
//     greet: function () {
//       console.log("Hi, " + this.name);
//     }
//   };
//   user.greet();
// this Keyword
// Refers to the object that is calling the method.







// const car = {
//     brand: "Toyota",
//     color: "white",
//     start() {
//       console.log("Car started");
//     }
//   };
// //   This object has properties (brand, color) and a method (start()).






//   Interview Definition (Short & Sweet):
//   “An object in JavaScript is a collection of key-value pairs used to store and organize data. Objects can also have functions, which are called methods.”




// How to Add Value in Object?
// let student={
//     name:"hamza",
//     age:22,
//     goal:"SOftware enginner"
// }
// student.Nationality="Pakistan"
// student["city"] = "Lahore";
// console.log(student)


// How to delete 
// let student={
//     name:"hamza",
//     age:22,
//     goal:"SOftware enginner"
// }

// delete student.age


// console.log(student)





// Objects Method
// 📘 Object Methods in JavaScript – Easy Theory
// ✅ What is an Object Method?
// A method is a function inside an object. Jab kisi object ke andar koi function likha jata hai, usay object method kehty hain.
// Ye method us object ke properties ke sath kaam karta hai using this keyword.

// 🧠 Why Use Object Methods?
// Behavior define krne ke liye (like actions).
// Reusable code ke liye.


// const person = {
//     name: "Hamza",
//     greet: function () {
//       console.log("Hello, my name is " + this.name);
//     }
//   };
  
//   person.greet(); // Output: Hello, my name is Hamza
  


// 🧠 this Keyword:
// this ka matlab hota hai current object — yani jis object ne method call kiya.



// 🔹 Modern Syntax (ES6 Shorthand)
// const student = {
//     name: "Hamza",
//     sayHi() {
//       console.log("Hi, " + this.name);
//     }
//   };
  
//   student.sayHi(); // Hi, Hamza
  







// Example: Multiple Methods in One Object
// const calculator = {
//     a: 10,
//     b: 5,
//     add() {
//       return this.a + this.b;
//     },
//     subtract() {
//       return this.a - this.b;
//     },
//     multiply() {
//       return this.a * this.b;
//     },
//     divide() {
//       return this.a / this.b;
//     }
//   };
  
//   console.log("Addition: ", calculator.add());       // 15
//   console.log("Subtraction: ", calculator.subtract()); // 5
//   console.log("Multiplication: ", calculator.multiply()); // 50
//   console.log("Division: ", calculator.divide());     // 2
  











// 📘 JavaScript Object Constructors – Easy Theory
// ✅ What is an Object Constructor?
// A constructor is like a template (ya blueprint) for creating multiple objects with same structure but different values.

// Iska kaam hota hai: "Ek function banao jo naye objects banaye."






// 💡 Why Use Constructor?
// Jab hume same structure ke multiple objects chahiye.

// DRY (Don't Repeat Yourself) code likhne ke liye.

// Reusable and scalable approach ke liye.






// 🔨 Basic Syntax of Constructor Function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// Person = Constructor function (capital letter se start hota hai)
// this.name = property ban rahi hai
// new keyword se object create hoga












Interview Definition (Short & Sweet):
// “A constructor in JavaScript is a special function used to create and initialize multiple objects of the same type. It uses the this keyword to assign properties and new to create instances.”