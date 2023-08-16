// 😀 Let's create a shorter alias for console.log to enhance readability
const print = console.log.bind(console);

// Suppose you want to check if all the numbers in the given array (a collection of numbers) are non-negative or not.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 89];

function isPositive(element) {
return element >= 0;
}

print(numbers.every(isPositive));
// Output: true
// The condition will be applied correctly as the callback function isPositive includes a return statement.

