// Declare the work arrays
let numbers = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let otherNumbers = [99, 98, 97, 96, 95]

// Add a element at the end of the array
numbers.push(10)

// Remove the last element and save it
const lastNumber = numbers.pop()
console.log('last value:', lastNumber)

// Add a element at the first position
numbers.unshift(11)
console.log(numbers)

// Remove the first element of the array
numbers.shift()

// Combine 2 arrays
const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)

// Make a shallow copy of a portion of an array
let subNumbers = numbers.slice(4, 9)
console.log(subNumbers)

// For each element of the array, multiply it by 2 and print it
numbers.forEach(number => console.log( number*2 ))

// Using map to save a new array with the numbers multiplied by 3
const newNumbers = numbers.map(number => number*3)
console.log(newNumbers)

// filter the array to obtain only even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)

//  Reduce an array to acumulate the sum of all elements
const sum = numbers.reduce((accum, number) => {accum + number}, 0) 
console.log(sum)

// Find the first element greather than 4
const finded = numbers.find(number => number > 4)
console.log(finded)

// Verify if the array have the number 0
console.log(numbers.includes(0)) 

// Sort the array in ascending order
const sortNumbers = numbers.sort()
console.log(sortNumbers)

// Reverse the array of numbers
numbers.reverse()
console.log(numbers)