const events = require('events');

const myEmmiter = new events.EventEmitter();

myEmmiter.once('userDetails',(name,age)=>{
    console.log(`Hello, ${name}! You are ${age} years old.`)
})

myEmmiter.emit('userDetails',"Vamshi",20)
myEmmiter.emit('userDetails',"Teja",31)