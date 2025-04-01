// You will complete two mini-challenges, each focusing on a different approach
// —one with .fill() and
// one with a for loop. In doing so, you’ll practice how to turn uninitialized slots into defined arrays.

// Task 1: Initialize the Array
let newArray = Array(7);  // Create array with 7 slots
console.log(newArray);   // Outputs: [ <7 empty items> ]

newArray.fill("Hello");
console.log(newArray);  // Outputs: "Hello" 7 times


// Task 2: Update the Array
newArray = Array(7).fill("Hola", 2, 4);
console.log(newArray);  // Outputs: 


// Task 3: Populate the Array with a for Loop
let sizeFiveArray = Array(5);  // Create array with 5 slots
console.log(sizeFiveArray);   // Outputs: [ <5 empty items> ]

for (let i = 0; i < sizeFiveArray.length; i++){
    sizeFiveArray[i] = i*10;
}
console.log(sizeFiveArray);