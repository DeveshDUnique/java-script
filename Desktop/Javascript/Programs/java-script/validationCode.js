function Validate(id,errMessage)
{
    debugger;
    var someElement=document.getElementById(id);
    if(someElement.value == "")
    {
        console.log(id);
    }
    else
    {
        console.log(errMessage);
    }

}