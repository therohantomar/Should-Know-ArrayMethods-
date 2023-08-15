The `concat()` method in JavaScript is used to merge two or more arrays or strings, creating a new array or string with the combined elements. It was introduced in ECMAScript 1 (ES1) and has been part of JavaScript since its inception.

-Merging Arrays: concat() merges arrays and strings, returning a new array containing the elements from all the arrays. Original arrays remain untouched.

-Shallow Copy: It creates a new array by copying element references, not the elements themselves. Changes to original array elements after merging won't affect the concatenated array, and vice versa.


```javascript
// 📦 Create an array named "array1" containing numbers
const array1 = [1, 2, 3, 4, 5, 6, 7];

// 🎨 Create an array named "array2" containing alphabet letters
const array2 = ["a", "b", "c", "d"];

// 🧩 Concatenate "array1" and "array2" into a new array named "array3"
const array3 = array1.concat(array2);

// 🎯 Check if the element at index 0 in "array3" is the same as the element at index 0 in "array1"
print(array3.at(0) === array1.at(0));
// Output: true (both elements are 1)

// 🌍 Check if "array3" is the same as "array1"
print(array3 === array1);
// Output: false (they are not the same array)

// ✨ This behavior shows that the .concat() method creates a new array with references to the original elements.
// 💡 Mutating elements in the new array doesn't affect the parent arrays or vice-versa 





Explanation:
- 📦 Create an array named "array1" with numbers.
- 🎨 Create an array named "array2" with alphabet letters.
- 🧩 Concatenate "array1" and "array2" into a new array named "array3".
- 🎯 Check if the element at index 0 in "array3" is the same as the element at index 0 in "array1". The output will be `true` since both elements are 1.
- 🌍 Check if "array3" is the same as "array1". The output will be `false` since they are not the same array.
- ✨ This behavior is due to the fact that the `.concat()` method creates a new array with references to the original elements. Mutating elements in the new array doesn't affect the parent arrays.



