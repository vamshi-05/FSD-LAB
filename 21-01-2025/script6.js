let p1 = Promise.resolve(5);
let p2 = Promise.resolve(10);
let p3 = Promise.resolve(15);

p1.then((p1Res)=>{
    return p2.then((p2Res)=> p1Res+p2Res)
    })
     .then((p12SUm)=>{
        return p3.then((p3SUm)=> p12SUm+p3SUm)
     })
     .then((finalSUm)=>{
        console.log("Final Sum is : ",finalSUm)
     })