function print(){
    console.log("Printing after setTimeout")
}

function delayMessage(message,delay,callback)
{
    setTimeout(()=>{
        console.log(message);
        callback()
    },delay)
}

delayMessage("Hii , How r u ?", 1000,print);