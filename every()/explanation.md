:ballot_box_with_check: Array.prototype.every()
The every() method is available in ECMAScript 5 (ES5) and can be used on arrays. It iterates over each element of the array and applies a callback function to test a specific condition. The method returns a boolean value indicating whether all elements in the array satisfy the provided condition.

javascript ```
:memo: Syntax

array.every((element, index, array) => {
  // condition to test
});

:one: element: The current element being processed.
:two: index: The index of the current element.
:three: array: The array on which the every() method was called.

The callback function takes three parameters: element, index, and array. Within the callback function, you can define the condition that each element should satisfy.

:arrow_right: Return Value
The every() method returns true if all elements in the array satisfy the condition specified by the callback function. If any element fails to satisfy the condition, the method returns false.

:rocket: Example Usage


const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every((element) => {
  return element % 2 === 0;
});

console.log(allEven); // Output: true



n this example, the every() method checks if all elements in the numbers array are even. The condition element % 2 === 0 is used to test if each element is divisible by 2. Since all elements satisfy this condition, the every() method returns true.

Feel free to customize the content and formatting of the README.md file further to suit your needs and add any additional information you think is relevant.

I hope this helps! :smiley:
