console.clear()

// Comparison Operator
if(5 == 5) {console.log(true)} // It only cheak value not type

if (5 === '5') {console.log(true)} //It  cheak value and type both
else {console.log(false)}

if(5 != 4) {console.log(true)} else {console.log(false)}
if(5 != '4') {console.log(true)} else {console.log(false)}


if(5 !== 5) {console.log(true)} else {console.log(false)}
if(5 !== '5') {console.log(true)} else {console.log(false)} // It cheaks value and data type both


if (5 < 10) {console.log(true)} else {console.log(false)} //Less than
if (5 <= 10) {console.log(true)} else {console.log(false)} //Less than equal to


if (5 > 10) {console.log(true)} else {console.log(false)} // Greater than
if (5 >= 10) {console.log(true)} else {console.log(false)} // Greater than equal to


// Logical Operators &&, ||, !
// && -> AND Operator ---> Cheak both the condition if both the condition are true then it will print true else false
if(5 < 10 && 10 < 15) {console.log(true)} else{console.log(false)}

// || -> OR Operator ---> If any one condition is true it will print true
if (5 < 10 || 10 > 15) {console.log(true)} else{console.log(false)}

// ! -> NOT Operator ---> It opposes the result
console.log(!(5 < 10))

// Ternary Operator (expression) ? a : b
1 < 3 ? console.log(true) : console.log(false)

