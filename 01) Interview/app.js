


// setInterval(() => {  // Callback Function
//     console.log("Hello every 3 seconds");
// }, 3000);



// setTimeout(() => { // Callback Function
//     console.log("Hello after 2 seconds");
// }, 2000);



// let obj1 = { name: "Ayan" };
// let obj2 = obj1;
// obj2.name = "Bhai";
// console.log(obj1.name); // Output: "Bhai"
// console.log(obj1); // Output: "Bhai"
// console.log(obj2); // Output: "Bhai"

// console.log(0 == false) // true
// console.log(0 === false) // false



// let map = [1,2,3,4,5];  // 📌 Original array change nahi hota
// let mapRes = map.map((num) => {
//     return num * 2;
// })
// console.log(mapRes);



// let filter = [1,2,3,4,5]; // 📌 Original array change nahi hota
// let filRes = filter.filter((num) => {
//     return num % 2 === 0;
// })
// console.log(filRes);




// let reduce = [1,2,3,4,5]; // 📌 Original array change nahi hota
// let redRes = reduce.reduce((acc, curr) => {
//     return acc + curr;
// }, 0)
// console.log(redRes);





// let str = "aaaaabbbbb";
// console.log(str.split("").reverse().join(""));




// // Closure Example
// function outer() {
//     const x = 10;

//     return function innner() {
//         console.log(x);
//     }
// }
// outer()();



// // Closure Example
// function outerr() {
//     const y = 25;

//     return function inner() {
//         console.log(y);
//     }
// }

// outerr()();




// let obj = {
//     name: "Ayan",

//     getname : function() {
//         return this.name;
//     }
// }
// console.log(obj.name);
// console.log(obj.getname());





// let push = [1,2,3];
// push.push(4,5);
// console.log(push);

// let pop = [1,2,3];
// pop.pop();
// console.log(pop);


// let unshift = [1,2,3];
// unshift.unshift(200,100,300);
// console.log(unshift);

// let shift = [1,2,3];
// shift.shift();
// console.log(shift);



// console.log(![]); // false





// if ([]) {
//     console.log("i am present")

// } else {
//     console.log("i am absent")

// }




// const strRev = "ayan";

// console.log(strRev.split("").reverse().join(""));











//------------------------------------Reverse a string without using inbuilt functions-------------------------------------------------
// let str = "abcdef";
// let res = "";

// for(let char of str) {
//     res = char + res;
//     console.log(res);
// }
// console.log(res);






//------------------------------------Array Destructuring-------------------------------------------------
// let arr = [1,2,3,4,5];
// let [a,b,c,d,e] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(a,b,c,d,e);









//------------------------------------Ternary Operator-------------------------------------------------
let age = 20;
let res = age > 18 ? "you are a man" : "you are child";
console.log(res);
