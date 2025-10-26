let data = [5,7,8,9]

console.log(data.push(2)) // adding at last

console.log(data.pop()) // removing the element from last


console.log(data.shift());  // shift all elements to the right

console.log(data.unshift(6));  // add element to first index and shift all right

//console.log(data.splice(2)); // removes elements fro given index

console.log(data.splice(2,1)) // removes 1 element from index 2

console.log(data.splice(1,1,11)) // adding 11 at index 1

console.log(data)