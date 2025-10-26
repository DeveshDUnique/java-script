// type conversion


let num = Number("123")
console.log(num,typeof(num))



let i = 8
console.log(i,typeof(i))

i = i + ""
console.log(i,typeof(i))


//coercion operation
i = i-2  ///substracting 2 from string
console.log(i,typeof(i)) //6

i = !i
console.log(i,typeof(i))


console.log(Boolean(9))

console.log(Boolean(0)) //only 0 in numbers is false


console.log(Boolean(undefined)) //false

i =5
i = ++i +2 
console.log(i,typeof(i))

let j = parseInt("3232 Dev") //parseInt seperates numbers from the strings
console.log(j,typeof(i))
















