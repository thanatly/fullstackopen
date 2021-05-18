// Basic JS command

// Variables
const x = 1 //const- cant be changed
let y = 5 ////let- can be changed

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
//x = 4				// causes an error

// Arrays
const t = [1, -1, 3]

t.push(5)			// add a new item to the array

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
}) 

const t2 = t.concat(5)
console.log(t2)		  // [1, -1, 3, 5] is printed

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, -2, 6, 10] is printed

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)   // [ '<li>1</li>', '<li>-1</li>', '<li>3</li>', '<li>5</li>' ]

// Destructuring assignment
const w = [1, 2, 3, 4, 5]

const [first, second, ...rest] = w

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed
