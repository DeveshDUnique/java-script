var counter = 0;
function KeepCounting(){
    counter = counter +1;
    console.log(counter);
    setTimeout(()=>{
        KeepCounting();
    },1000);
}

KeepCounting();