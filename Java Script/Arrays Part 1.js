console.clear()

var mFriends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']

console.log(mFriends)
console.log(typeof(mFriends))

console.log(mFriends[0])
console.log(mFriends[1])
console.log(mFriends[2])

// Update a value
mFriends[0] = 'Yash'
console.log(mFriends[0])


// Add more items
mFriends[6] = 'Alan'
console.log(mFriends)

mFriends[10] = 'Tiffany'
console.log(mFriends)

mFriends[mFriends.length] = 'Rohan'
console.log(mFriends.length)

mFriends.push('Jack') //Best way to add items in array
console.log(mFriends)

// Delete a value
var mName = mFriends.pop() //It removes last element from the list
console.log(mName)
console.log(mFriends)

var mName = mFriends.pop()
console.log(mName)
console.log(mFriends)

var mName = mFriends.pop()
console.log(mName)
console.log(mFriends)

var mName = mFriends.pop()
console.log(mName)
console.log(mFriends)