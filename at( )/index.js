// 😀 Bind console.log to a shorter function name
const print = console.log.bind(console);

// Accessing Elements:

// 🍎 Create an array named "fruitBasket" containing different fruit names
const fruitBasket = ["apple", "grapes", "mango", "pineapple"];

print("Accessing Elements:");

// 🍏 Use the .at() method to access elements at specific indices
print(fruitBasket.at(0));   // -> apple
print(fruitBasket.at(4));   // -> undefined (as index 4 doesn't exist)
print(fruitBasket.at(-1));  // -> pineapple

// Adding Elements inside an array of objects of fruitbaskets:

// 📦 Create an array named "fruitBaskets" containing objects representing fruit baskets
const fruitBaskets = [{ apple: 1 }, { banana: 2 }, { mango: 4 }];

// 🍌 Find the second-to-last fruit basket and add a "mango" property with a value of 1
// using index [] brackets
fruitBaskets[fruitBaskets.length - 2].mango = 1;
print(fruitBaskets[fruitBaskets.length - 2]); // -> { banana: 3 }
// It looks messy

// 🎯 Now see the simplicity of the .at() method
fruitBaskets.at(-2).mango = 1;
print(fruitBaskets.at(-2)); // -> { banana: 3 }

// Accessing Matrices

// 📊 Create a matrix (2D array) named "matrix"
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 🔢 Access a specific element in the matrix using index [] brackets
print(matrix[1][1]); // Output: 5 (second row, second column)
print(matrix[2][0]); // Output: 7 (third row, first column)

// 🔮 Access matrix elements using the .at() method
print(matrix.at(1).at(1)); // Output: 5 (second row, second column)
print(matrix.at(2).at(1)); // Output: 7 (third row, first column)
