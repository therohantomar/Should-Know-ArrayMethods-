// Bind console.log to a shorter function name
const print = console.log.bind(console);

// Accessing Elements:

const fruitBasket = ["apple", "grapes", "mango", "pineapple"];

print("Accessing Elements:");
print(fruitBasket.at(0));   // -> apple
print(fruitBasket.at(4));   // -> undefined (as index 4 doesn't exist)
print(fruitBasket.at(-1));  // -> pineapple

// Adding Elements inside an array of objects of fruitbaskets:

const fruitBaskets = [{ apple: 1 }, { banana: 2 }, { mango: 4 }];

// Find second-to-last fruit basket and add bananas property with 1 value
// using index [] brackets
fruitBaskets[fruitBaskets.length - 2].mango = 1;
print(fruitBaskets[fruitBaskets.length - 2]); // -> { banana: 3 }
// It looks messy

// Now see the simplicity of the at method
fruitBaskets.at(-2).mango = 1;
print(fruitBaskets.at(-2)); // -> { banana: 3 }

// Accessing Matrices
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

print(matrix[1][1]); // Output: 5 (second row, second column)
print(matrix[2][0]); // Output: 7 (third row, first column)

print(matrix.at(1).at(1)); // Output: 5 (second row, second column)
print(matrix.at(2).at(1)); // Output: 7 (third row, first column)
