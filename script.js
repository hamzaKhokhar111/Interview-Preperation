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

// Reduce
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