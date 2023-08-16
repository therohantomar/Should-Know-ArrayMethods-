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

// Checking if one array is a subset of another array
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

print(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // Output: true
print(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // Output: false

//lets get into real case
const Hotelmenu = [
  { name: "Paneer Masala", isVeg: true },
  { name: "chilli fry", isVeg: true },
  { name: "chicken", isVeg: false },
  { name: "bhurji fry", isVeg: false },
];
//lets check if the every item in hotelmenu is veg or not
function isAllVeg(element) {
  return element.isVeg === true;
}

print(Hotelmenu.every(isAllVeg)); // Output:false

//check whether there are duplicate records in array of objects or not
const Students = [
  { name: "bhavya", rollNo: 22 },
  { name: "rahul", rollNo: 23 },
  { name: "shamshad", rollNo: 24 },
  { name: "bhavya", rollNo: 22 },
];

// Function to check if an element is a duplicate based on its name
function isDuplicateRecord(element, index, array) {
  // Check if the index of the current element's name is the same as the index of its first occurrence
  return index === array.indexOf(element.name);
}

// Check if every element in the array is unique based on the defined criteria
console.log(Students.every(isDuplicateRecord));





