for(let i =1 ; i<=100;i++)
{
    if(i%3==0)
    {
        console.log(i);
    }
    else
    {
        console.log("not divisible by 3")
    }
}



let num = 43126;
let reverse = 0;

while(num>0)
{
    
    let digit = num %10;
    reverse = reverse * 10 + digit; // formulae
    num = parseInt(num/10); //
    
}

console.log(reverse)