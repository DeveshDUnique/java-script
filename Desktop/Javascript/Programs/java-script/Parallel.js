var counter = 0;

function KeepCounting()
{
    counter = counter + 1;
  
  // Send the counter value back to the main thread
    postMessage(counter);

    setTimeout(() => { KeepCounting();},2000);

    // Listen for messages from the main thread
    onmessage = function(event)
    {
        if(event.data == 'startcounting')
        {
            KeepCounting();
        }
    }
}

