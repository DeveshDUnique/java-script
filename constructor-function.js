//constructor function

function Employee(name,tech)
{

    this.name = name;
    this.tech = tech;

    this.work = function()
    {
        console.log("writing the code")
    }

}


let std = new Employee('dev','js')

let std1 = new Employee('shiv','java')

console.log(std1)


std.tech = 'A.I'

console.log(std)

std.work();










