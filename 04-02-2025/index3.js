const events = require('events');

const myEmmiter = new events.EventEmitter();

myEmmiter.on('userDetails',(name,age)=>{
    console.log(`Hello, ${name}! You are ${age} years old.`)
})

myEmmiter.emit('userDetails',"Vamshi",20)