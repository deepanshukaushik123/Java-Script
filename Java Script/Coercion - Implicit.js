console.clear()

// Coercion --> is conversion of data type from one to another

var mStr = 'Hello'
var mNum = 5
var mSum = mStr + mNum // Here it converts 5 to string

console.log(mSum)
console.log(typeof(mSum))

// Boolean + String
console.log('john' + true)
console.log(typeof('john' + true))

// Number + String
console.log(50 + 'john')
console.log(typeof(50 + 'john'))

var mValue = +'2' // This + sign converts string to number
console.log(mValue)
console.log(typeof(mValue))

var nValue = 2>='2' // this converts it to boolean
console.log(nValue)
console.log(typeof(nValue))

if (5) { // Any thing except 0, null, '' undefined are true
    console.log('True')
} else {
    console.log('false')
}

