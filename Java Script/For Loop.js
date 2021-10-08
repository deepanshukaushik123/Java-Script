

var mList = [1, 2, 3, 4, 5]
var pos;
// for(pos = 0; pos < mList.length; pos++) {
//     console.log('Position => ' + pos + ' Value => ' + mList[pos])
//     console.log(pos)
// }

// Break Keyword
// for(pos = 0; pos < mList.length; pos++) {
// if(pos >=3) break; 
// console.log(pos);
// }

// Continue Keyword
// This will give us all Even Numbers;
for (pos = 0; pos < mList.length; pos++) {
    if(pos % 2 !== 0) continue
    console.log(pos)
}