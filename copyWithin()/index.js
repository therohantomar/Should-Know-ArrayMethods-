// 😀 Let's create a shorter alias for console.log to enhance readability
const print = console.log.bind(console);

// Define an array of outdoor games
const outdoorGames = ["football", "cricket", "hockey", "baseball"];

// Target index: 0, Start copying from index: 2, End copying at index: 3
print(outdoorGames.copyWithin(0, 2, 3)); // Output: [ 'hockey', 'cricket', 'hockey', 'baseball' ]
// Copying 'hockey' to index 0 as expected

// Example with indoor games array
const indoorGames = ["carrom", "ludo", "chess", "sudoku", "snake & ladder"];

// Target index: 1, Start copying from index: 3, No specified end index
print(indoorGames.copyWithin(1, 3)); // Output: [ 'carrom', 'sudoku', 'snake & ladder', 'sudoku', 'snake & ladder' ]
// Copying 'sudoku' and 'snake & ladder' to index 1 (ludo) and the array repeats as specified


// There can be a case when both the start and end indices are not defined.
const places = ["North Dakota", "chicago", "iowa", "newYork"];
print(places.copyWithin(2)); // Output: [ 'North Dakota', 'chicago', 'North Dakota', 'chicago' ]
// If you don't specify the start and end index, it copies elements from 0 to the target index at the target index.


// Let's work with negative indices
const countries = ["India", "Usa", "China", "Russia", "Ukraine"];

// Copy elements from -3 to -1 and place them at -2 (China to Russia)
print(countries.copyWithin(-2, -3, -1));
// Output: [ 'India', 'Usa', 'China', 'China', 'Russia' ]



// Conclusion: The copyWithin method offers a convenient way to manipulate arrays by copying elements within them.
