let nums = [2,7,9,1];
console.log(nums)

let [a,b,,d] = nums
console.log(d)





// swapping of numbers with array destructuring

let x = 9;
let y = 4;

[x,y] = [y,x]

console.log(x,y)

let words = "hello i am dev".split(' ')

console.log(words)

let [e,f,g,h] = words
console.log(e,g,h)


let[o,,...q] = words  // skipping the 'i' letter and then all after q 
console.log(q)





