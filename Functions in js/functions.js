// 1. Function Kya Hota Hai?
// Function ek block of code hota hai jo specific kaam karta hai. hum function ko bna kr bar bar use kar saktay hain, call kar saktay hain jb zaroorat ho.

// function greet() {
//   console.log("Hello Hamza!");
// }
// greet(); 







// 2. Function with Parameters and Return

// function add(a, b) {
//   return a + b;
// }

// console.log(add(3, 4)); // 7
// a aur b parameters hain.
//3 or 4 orguments hain

// return result wapas bhejta hai.








// 3. Function Expression
// const multiply = function(x, y) {
//   return x * y;
// };

// console.log(multiply(5, 6)); // 30
// Ismein function ko ek variable ke andar assign kiya gaya hai.








// 4. Arrow Function (=>)
// Short syntax ES6 mein introduce hui.

// const subtract = (a, b) => a - b;
// console.log(subtract(10, 3)); // 7

// let sum=()=>{
//     console.log("This is a Arrow Function")
// }
// sum();












// 5. Default Parameters
// Agar user koi value na de, to default use ho jaye.

// function greet(name = "Guest") {
//   console.log("Hello, " + name);
// }

// greet();        // Hello, Guest
// greet("Hamza"); // Hello, Hamza
















// Rest Parameters (...args)
// Jab aapko unknown number of arguments mil rahe ho.

                                        // Rest OPerator
// agr hum chaty hain k hamri ("hamza",10,20,02) es trah l argument bhi pass krle functin to humko  E6 ka Rest operator use krna hoga... ka use krna hoga
// function sum(name,...ags) {
//     console.log(`Hello ${name} : `); ye string ko shownkry ga
//     let sum=0;
//     for(let i in ags){
//         sum= sum+ ags[i];
//     }
//     console.log(sum)
//  }

// example++2

// function sumAll(...nums) {
//   return nums.reduce((total, num) => total + num, 0);
// }

// console.log(sumAll(1, 2, 3, 4)); // 10










// 7. Callback Function
// Function ko as argument pass karna.  function k andr function ko call krna callback function khty hain!!!!


// function greetUser(name, callback) {
//     console.log("Hi " + name);
//     callback();
//   }
  
//   function sayBye() {
//     console.log("Bye!");
//   }
  
//   greetUser("Hamza", sayBye);






// 8. Higher Order Functions
// Ek aisa function jo kisi doosray function ko accept karta hai as an argument ya return karta hai as a result, usay Higher Order Function kehte hain.
// Jo function doosre function ko accept kare ya return kare — woh Higher Order Function hota hai

// function sum(callback) {
//     console.log("Hello");
//     callback();  // yahan callback function ko andar se call kiya ja raha hai
// }

// function bye() {
//     console.log("hi this is call back");
// }

// sum(bye);  // 👈 yahan bye function ko reference ke tor pe diya gaya

  
  




// 9. Immediately Invoked Function Expression (IIFE)
// Function jo turant run ho jata hai.
// esa function jo khud he run ho jata hain jisko call krny ki zaroorat ni hoti

// (function sum(num){
// console.log(num+num)
// }(20))

    // (function() {
    //     console.log("IIFE is running!");
    //   })();
    









    // 10. Function Closures (Advanced)
    // Function ke andar function jo outer variables ko access kar sakta hai.
    // jb inner function apny outer functions k variables ko acces krta hain osko hum Closures khty hain
    
    // function outer() {
    //     let name = "Hamza";
        
    //     function inner() {
    //         console.log("Hello, " + name);  // yahan inner function 'name' ko use kar raha hai
    //     }
    
    //     return inner;
    // }
    
    // const greet = outer();  // outer function execute ho gaya
    // greet();  // inner function abhi bhi 'name' ko yaad rakhta hai
     
    // Closure is very important for interviews! 💡









    // 11. Recursion
    // Jab function khud ko call karta ha
    // function factorial(n) {
    //     if (n === 1) return 1;
    //     return n * factorial(n - 1);
    //   }
      
    //   console.log(factorial(5)); // 120
      






    // 13. Function Hoisting
    // Function declarations hoist hoti hain (top pe chali jaati hain).
//     sayHi(); // Works

// function sayHi() {
//   console.log("Hi!");
// }





// 14. Async/Await Functions (Advanced)
// Async operations ko handle karne ka modern tareeqa.
// async function fetchData() {
//     const res = await fetch('https://api.example.com');
//     const data = await res.json();
//     console.log(data);
//   }





// 04/09/2025 this is about functions in js for interview
  
