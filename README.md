# JAVASCIPT_SMIT_BATCH_18_CLASS_38_REST_OPRATOR_AND_SPREAD_OPRATOR

## 📖 Introduction
This project covers the **Rest (...)** and **Spread (...)** operators in JavaScript (ES6). These operators make working with arrays, objects, and function parameters easier and more efficient.

---

## 🔹 Rest Operator

The Rest operator collects multiple elements into a single array.

### ✅ Example: Function Parameters
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); 
// Output: 10
✅ Example: Array Destructuring
javascript
Copy code
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
🔹 Spread Operator
The Spread operator expands arrays or objects.

✅ Example: Array Copy
javascript
Copy code
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); 
// [1, 2, 3]
✅ Example: Merge Arrays
javascript
Copy code
const a = [1, 2];
const b = [3, 4];

const merged = [...a, ...b];
console.log(merged); 
// [1, 2, 3, 4]
✅ Example: Merge Objects
javascript
Copy code
const obj1 = { name: "Ali" };
const obj2 = { age: 20 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// { name: "Ali", age: 20 }
🚀 Key Differences
Rest Operator	Spread Operator
Collects values	Expands values
Used in parameters	Used in arrays/objects
Combines elements into one	Breaks elements apart

📌 Conclusion
Rest and Spread operators simplify JavaScript code, improve readability, and reduce the need for complex loops or manual copying.
