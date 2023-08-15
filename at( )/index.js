const fruitBasket = ["apple", "guava", "banana", "grapes", "orange"];

const print = console.log.bind(console);

// Accessing the first element in the array
print(fruitBasket[0]);  // Output: apple

// Using negative index in brackets will result in undefined
print(fruitBasket[-1]);  // Output: undefined

// Accessing the last element using the length property -1  
print(fruitBasket[fruitBasket.length - 1]);  // Output: orange

// Using the at() method to access the last element with negative index
print(fruitBasket.at(-1));  // Output: orange

// Using the at() method to access the second-to-last element with negative index
print(fruitBasket.at(-2));  // Output: grapes

