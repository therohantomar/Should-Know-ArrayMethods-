// 😀 Instead of writing console.log again and again, let's bind the console.log to a shorter name
const print = console.log.bind(console);

// 🍎 Create an array named "Fruits" containing different fruit names
const Fruits = ["🍏", "🥝", "🍋", "🍈", "🍇"];

// 🥦 Create an array named "vegetables" containing different vegetable names
const vegetables = ["🌿", "🧅", "🍅", "🥒", "🌶️"];

// 🥗 Concatenate the "Fruits" and "vegetables" arrays into a new array named "eatables"
const eatables = Fruits.concat(vegetables);

// 🌮 Print the concatenated array "eatables" to the console
print(eatables);
// Output: ["🍏", "🥝", "🍋", "🍈", "🍇", "🌿", "🧅", "🍅", "🥒", "🌶️"]

// 🥛 Create an array named "beverages" containing different beverage names
const beverages = ["🥛", "🍹", "🥭", "🥤"];

// 🛒 Concatenate the "Fruits", "vegetables", and "beverages" arrays into a new array named "groceries"
const groceries = Fruits.concat(vegetables, beverages);

// 🛍️ Print the concatenated array "groceries" to the console
print(groceries);
// Output: ["🍏", "🥝", "🍋", "🍈", "🍇", "🌿", "🧅", "🍅", "🥒", "🌶️", "🥛", "🍹", "🥭", "🥤"]

// 🔢 Create an array named "numericals" containing numbers
const numericals = [1, 2, 33, 4, 5, 6, 6];

// 🔤 Create an array named "alphabets" containing alphabet letters
const alphabets = ["a", "b", "c", "d", "e"];

// 🎵 Concatenate the "numericals" and "alphabets" arrays into a new array named "alphanumeric"
const alphanumeric = numericals.concat(alphabets);

// 📚 Print the concatenated array "alphanumeric" to the console
print(alphanumeric);
// Output: [1, 2, 33, 4, 5, 6, 6, "a", "b", "c", "d", "e"]

// 📦 Create an array named "Emptyvals" with some empty values
const Emptyvals = [12, "ss", , "desi", , "grand"];

// 📦 Create another array named "EmptyVals2" with numbers
const EmptyVals2 = [11, 11, 11, 12, 334];

// 🧩 Concatenate the "EmptyVals2" and "Emptyvals" arrays into a new array named "collection"
const collection = EmptyVals2.concat(Emptyvals);

// 🧩 Print the concatenated array "collection" to the console
print(collection);
// Output: [11, 11, 11, 12, 334, 12, "ss", undefined, "desi", undefined, "grand"]

// ✨ Create an array named "array" containing numbers
const array = [22, 55, 44, 55, 777];

// ✨ Concatenate the "array" with a single value (33) into a new array named "arrays"
const arrays = array.concat(33);

// 🪄 Print the concatenated array "arrays" to the console
print(arrays);
// Output: [22, 55, 44, 55, 777, 33]



