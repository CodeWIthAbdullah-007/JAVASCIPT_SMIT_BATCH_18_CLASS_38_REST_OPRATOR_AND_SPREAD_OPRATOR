// REST OPRATOR

// ==============================================================================

// WITHOUT REST OPRATOR EXAMPLE

// function sum1(a, b, c, ...numbers) {
//     let alpha = a + b + c;
//     let arrSum = numbers.reduce((accumlated, current) => {
//         return accumlated + current;
//     });
//     return alpha + arrSum;
// };
// console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// let sum = arr.reduce((a, b) => {
//     return a + b;
// });

// ==============================================================================

// WITH REST OPRATOR/PARAMETORS EXAMPLE

// function sum(a,...numbers) {
//     console.log('a, numbers:', a, numbers); // WILL RECEVIE ARRAY
// }
// let arr = [1, 2, 4];
// let arr1 = [12, 14, 15]
// sum(1, arr, arr1);

// let arr = [1, 2, 3, 4, 5, 6,];
// let sumNumber = arr.reduce((accumlated, current) => {
//     return accumlated + current;
// });

// ==============================================================================


// ARRAY DESTRUCTURING WITH REST OPRATOR EXAMPLE

// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = arr;
// console.log(a); // 1
// console.log(b); // 2
// console.log(rest); // [3, 4, 5]

// ==============================================================================

// OBJECT DESTRUCTING WITH REST OPRATOR EXAMPLE

// let obj = {
    // name : 'Abdullah',
    // age : 22,
    // city : 'Karachi',
// };
// let { name, ...rest} = obj;
// let{name, age, city} = obj;
// console.log(name); // Abdullah;
// console.log(rest); // { age:22, city: 'Karachi' };

// ==============================================================================

// SPREAD ARRAY EXAMPLE

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// console.log(arr2);

// ==============================================================================

// ARRAYS MERGE

// let a = [1, 2];
// let b = [3, 4];
// let result = [...a, ...b];
// console.log(result);
// [1, 2, 3, 4];
