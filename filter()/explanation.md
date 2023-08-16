## :sparkles: Array.prototype.filter()

The `filter()` method was introduced in ECMAScript 5 (ES5) and provides a powerful way to create a new array based on a specific condition. It returns a **shallow copy** of a portion of an array that meets the criteria set in the callback function.

:memo: **Syntax**

```javascript
array.filter((element, index, array) => {
  // Condition applied
});
```

:one: element: The current element under consideration.
:two: index: The index of the current element.
:three: array: The array on which the filter() method was called.
The callback function receives three parameters: element, index, and array. Inside this function, you can define the condition that each element must satisfy.

:arrow_right: Return Value

The filter() method creates and returns a brand new array containing elements that fulfill the condition specified by the callback function. It's important to note that the original array remains untouched.

:rocket: Example Usage

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
```
Whether using a function statement or expression as a callback, ensure you specify the return statement within. However, if you use arrow functions and the condition is concise, you can skip the return statement.

Feel free to customize the content and formatting of your README.md file further to match your personal style.