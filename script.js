// JavaScript variables have 3 types of scope:
// local scope && global scope
// let, var, const
// let, const is a local scope variable

// var
// var x="hmz";
// var x="hamza"; we can also redeclare
// x=12  we can also reasign value in var casse
// {
//     var x=4;

// } x is accessble outside of block
// var is a global scope


// Let is LOcal scopr varible 
// Let just can reassign value but not dedecalre varible

    // function xyz(){
    //     var ab=10;
    //     if(true){
    //         let ab=20;
    //         console.log(ab)
    //     }
    //     console.log(ab)
    // }

// xyz();

// decaleration 
// var a=10;
// var a=20;
// console.log(a)

// 💡 Hoisting kya hoti hai?
// JavaScript mein hoisting ka matlab hai:
// Variables aur functions ko unki declaration se pehle memory mein allocate kar lena.
// Matlab, JavaScript pehle code ko run karne se pehle usmein jitne var se variables aur functions declare hue hain, unko "top of their scope" pe le jata hai. Isko hi hoisting kehte hain.




//what is tempororal deadzone (let,const) and Hoisting(var) ?

// ??Hoisting (mechanism is a js where variable and funtion declare are moved to the top of their containg scope execution)
// console.log(xyz)
// var xyz=10;


// map, filter,reduce
// map methos is use to create a new array from existing array by appling a function on each element of the array

// let zz=[1,2,3,4,5,3];

// let hh=zz.map((num)=>{
//     // console.log(num)
//     return num *10

// })
// console.log(hh)

// filter(filter method is use to create a new array from an exiting array by paasing test)
// let arr=[10,30,40,20,60,100,300,20]
// var abc=arr.filter((zz)=>{
//     return zz>50

// })

// console.log(abc)




 
// Reduce  Mehthod in JS
// let zz=[1,2,3,5,2]
// let hh=zz.reduce((z1,h1)=>{
//     return z1+h1
// })
// console.log(hh)


// function decaleration
// function zzz(num) {
//     return num*num

    
// }
// console.log(zzz(2))

// function expression(when we store a function in a variable is called function decaleration)

// let vara=()={

// }


// IIFE funnction
// ( function sum(num){
//     console.log(num + num)

// }(20))

// (function(x){
//     return (function(y){
//         console.log(x)
//     })(2);
// })(1);







// What is Arrow Function
// Function sum(){     
// console.log("Hello")
// }   
// sum()


// let sum=function(){
// console.log("Hello")
// }
// sum();


// let sum=()=>{
//     console.log("Hello")
// }





// // function with arguments or rest operator
// a simple function srf 2 parameter le sacata hain mtlb sum(a,b) es se zeada ni but  arguments ka use kr k parameter ko bhara sacty hain
// function sum() {
//     console.log(arguments)
//     let sum=0;
//     for(let i in arguments){
//         sum= sum+ arguments[i];
//     }
//     console.log(sum)
//  }
//  sum(12,12,2,3);
//  sum(12,12,2);


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
   
//  sum("Heloo",12,2,3);
//  sum(12,12,2);


                                        // speread OPerator
// agr hum chaty hain k hamri ("hamza",10,20,02) es trah l argument bhi pass krle functin to humko  E6 ka speread operator use krna hoga... ka use krna hoga
// function sum(name,...ags) {
//     console.log(`Hello ${name} : `); ye string ko shownkry ga
//     let sum=0;
//     for(let i in ags){
//         sum= sum+ ags[i];
//     }
//     let arr=[20,10,20];
//  }
   
//  sum("Heloo",12,2,3); es me hum rest operaor use kr rhy jaio but ye arr me srf ek he value klo le ga    ||  rest operaot  hamesha declaration k time use hoga
//  sum("Hello", ...arr); es me hum spread operator le rhy hain jo arr ki hr value ko le ga or sab ko lega || spread operator hamesha calling k tim,e use hoga



                   // Destructuring Array E6
// let user=["hamza",12,"Jhang"];
// let [name,age,city]=user;
// console.log(name)
// console.log(age)

// // ye E6 version se phely es tarah hota tarah es lye hum opr qwaly ko array deresting Array khty hain
// let name=user[0];
// let age=user[1];
 
                           
                              // structuring Object E6
// let user={
//     name:"Hamza",
//     age:22,
//     city:"Jhang"
// }

// let {name,age,city}=user;
// console.log(name);
// console.log(age);
// xc
// console.log(city)// / Destienrn
// console.log(first)
// console.log(first)


// Question
// what is Array in js


// Question
// what is sets in js
// sets uniquie values of store krt hain or duplicates ko remove krta hain
// :>A JavaScript Set is a collection of unique values.
// :>Each value can only occur once in a Set.
// :>The values can be of any type, primitive values or objects.
// const letters = new Set([1,2,3,4,5]);
// letters.add(7);


//question
//what is Map
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.


// const fruits = new Map([ ["apples", 500], ["bananas", 300], ["oranges", 200]  ]);

// // Set Map Values
// fruits.set("apples", 500);
// fruits.size;
// fruits.size;
// The clear() method removes all the elements from a map
// fruits.clear();






// Primitive Data Types
// In JavaScript, a primitive value is a single value with no properties or methods.
// JavaScript has 7 primitive data types:

// string
// number
// boolean
// bigint
// symbol
// null
// undefined


// EXAMPLE
    // typeof "John"         // Returns string
    // typeof ("John"+"Doe") // Returns string
    // typeof 3.14           // Returns number
    // typeof 33             // Returns number
    // typeof (33 + 66)      // Returns number
    // typeof true           // Returns boolean
    // typeof false          // Returns boolean
    // typeof 1234n          // Returns bigint
    // typeof Symbol()       // Returns symbol
    // typeof x              // Returns undefined





//     Complex Data Types
// A complex data type can store multiple values and/or different data types together.

// JavaScript has one complex data type:

// object
// All other complex types like arrays, functions, sets, and maps are just different types of objects.

// The typeof operator returns only two types:
// 1:>object
// 2:>function


// EXAPLES
// typeof {name:'John'}   // Returns object
// typeof [1,2,3,4]       // Returns object
// typeof new Map()       // Returns object
// typeof new Set()       // Returns object

// typeof function (){}   // Returns function

// Thats mean k in javaScript everything is a Object














// What Is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.
// When you search for data in a text, you can use this search pattern to describe what you are searching for.
// A regular expression can be a single character, or a more complicated pattern.
// let text = "Visit W3Schools!";
// let n = text.search("W3Schools");
// output    :// 6

// What is JavaScript Operator Precedence ?
// Operator precedence describes the order in which operations are performed in an arithmetic expression.
// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
// * >> / >>  + >> -
// Yeh partially sahi hai, lekin technically *, /, aur % same level par hotay hain (equal precedence), aur evaluation left to right hoti hai.

// let result = 10 + 6 / 2 * 3 - 1;
// 6 / 2 = 3
// 3 * 3 = 9
// 10 + 9 = 19
// 19 - 1 = 18
// console.log(result); // 18




// Eroor
// Throw, and Try...Catch...Finally
// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.