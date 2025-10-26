function method()
       {
            var a = 100;
            var b = 200;
            var addition = a + b;
            
           var additionOutput = document.getElementById("additionOutput");
           
           var inputValueOutput = document.getElementById("inputValueOutput");

           additionOutput.textContent = addition;
           console.log(addition);

           var someElement = document.getElementById("txtname")
           
           inputValueOutput.textContent = someElement.value;
           console.log(someElement.value);
       }