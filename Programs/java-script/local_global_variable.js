let user = "dev";  // global variable

function greet(u)  // u is local variable
{
    console.log(user);
    return `Hello ${u}`
}

let str = greet(user);
console.log(str);

// default value
function add(num1,num2,num3=1) // when we don't pass any values in arguments the default value will be passed
{
    return num1 + num2 + num3;
}


console.log(add(2,4))










