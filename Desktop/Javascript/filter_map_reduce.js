let nums = [34,21,23,56,87,25]

//console.log(nums.filter(n=> n%2 === 0 ))

let results = nums.filter(n=> n%2 === 0 )
                    .map(n => n*2)
                    .reduce((a,b) => a+b);


console.log(results)








    // .forEach(n => {
    //     console.log(n);
    // });















