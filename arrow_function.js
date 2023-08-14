let arr = (user) =>     // arroe function
{
    console.log("Arrow function " + user);
    return 1;
}


console.log(arr('dev'))




// arrow function with one statement can be written without the return and in one line


let add = (num1,num2) => num1 + num2


let sum = add(3,7);

console.log(sum);



//
let add1 = (num1,num2) =>
{
    if(num1 >= 0 && num2 >=0)
    {
        return num1 + num2;
    }
    else
    {
        console.log("Enter only positive numbers")
    }
}


let result = add1(10,11);
console.log(result)

