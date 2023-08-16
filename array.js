let arr = [];  //empty array

let val = [3,2,1,6,7]

console.log(val,val.length)


val.push(4); // adding values in array

console.log(val)


console.log(val[3])






let names = ['dev','shiv','monu']

names[2] = 'lalu'

console.log(names)




let data = ['dev',{tech:'js'},2,
function(){console.log("hello world")}]


console.log(data)

data[3]()



let nums = [];

nums[0] = 23;
nums[99] = 89;

console.log(nums)

//for off loop

for(let n of nums)
{
    console.log(n)  // all the values in between the nums array will be printed.
}


// for in loop


for(let key in nums)
{
    console.log(key); // all the key values will be printed.
}


// array destructuring




