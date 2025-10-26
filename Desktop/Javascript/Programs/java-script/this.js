let laptop1 =
{
    cpu : 'i7',
    ram : '16gb',
    brand : 'hp',


    getconfig :function()
    {
        console.log(this.cpu)
    }
}



let laptop =
{
    cpu : 'i9',
    ram : '16gb',
    brand : 'asus',


    compare: function(other)
    {
        if(this.cpu>other.cpu)
            console.log(this);
        else
        console.log(other);

    },


    getconfig :function()
    {
        console.log(this.cpu)
    }
}

//laptop1.getconfig()


// function getfastlaptop(laptop1,laptop2)
// {

// if(laptop1.cpu > laptop2.cpu)
// {
//     console.log(laptop1)
// }
// else
// {
//     console.log(laptop2)
// }


//}


//getfastlaptop(laptop,laptop1)

laptop.compare(laptop1)




