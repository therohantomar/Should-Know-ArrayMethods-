// 😀 Let's create a shorter alias for console.log to enhance readability
const print = console.log.bind(console);

//it's a very useful method in array
//lets remove all the dishes list that contains non veg and only show veg one
const Hotelmenu = [
    { name: "Paneer Masala", isVeg: true },
    { name: "chilli fry", isVeg: true },
    { name: "chicken", isVeg: false },
    { name: "bhurji fry", isVeg: false },
  ];

  const vegOnly=Hotelmenu.filter((element)=>element.isVeg===true)
  print(vegOnly)//->[ { name: 'Paneer Masala', isVeg: true },{ name: 'chilli fry', isVeg: true }]

//lets filter aplhabets from alphanumeric
const alphaNumeric=[1,2,3,4,"a","b","c","f"]
const alphabets=alphaNumeric.filter((element)=>typeof(element)==="string")
print(alphabets)//->[ 'a', 'b', 'c', 'f' ]


// Creating an array of student objects with names and roll numbers
const Students = [
    { name: "bhavya", rollNo: 22 },
    { name: "rahul", rollNo: 23 },
    { name: "shamshad", rollNo: 24 },
    { name: "bhavya", rollNo: 22 },
    { name: "ramkrihnahari", rollNo: 22 }
  ];
  
  // Using the filter() function to find duplicate records based on roll numbers
  const duplicateRecords = Students.filter((element, index, array) => {
    for (let i = 0; i < array.length; i++) {
      return element.rollNo === array.at(i).rollNo;
    }
  });
  
  // Outputting the array containing duplicate records
  console.log(duplicateRecords);
  