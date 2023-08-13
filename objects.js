let object = {   //object creation in js

    name : 'Dev',
    tech : ['java','js','py']

}

let input = 'name'

//console.log(object,typeof(object));

console.log(object.tech)

console.log(object[input])


/// complex object  -- object inside object


let student ={

    name : 'dev',
    profession :'it',
    laptop :{
        processor : 'i5',
        ram : '16gb',
        brand : 'Asus'
    }

}
/*The ?. syntax is called the "optional chaining" operator in JavaScript. It's used to handle situations where you're trying to
access properties or methods on nested objects, and one of the intermediate properties might be null or undefined. 
Using the ?. operator prevents "TypeError: Cannot read property '...' of null/undefined" errors. */

console.log(student?.laptop?.brand?.length)


//deleting object in javascript


// delete student.laptop.brand
// delete student.laptop.ram

// console.log(student)



//printing all the keys of ob ject student


for(let key in student)
{
    console.log(key) // all keys
}


//key and values

for(let key in student)
{
    console.log(key,student[key])
}



//key and values of laptop keys

for(let key in student.laptop)
{
    console.log(key,student.laptop[key])
}





















