function add(num,callback){
    callback(num + 10)
}
function sub(num,callback){
    callback(num - 3)
}
function mul(num,callback){
    callback(num * 2)
}

function operation(num){
    mul(num,(result1) =>{
        sub(result1,(result2)=>{
            add(result2,(finalResult)=>{
                console.log("Final Result : ",finalResult)
            })
        })
    })
}

operation(5)


// By returning the result

// function add(num,callback){
//     return callback(num + 10)
// }
// function sub(num,callback){
//     return callback(num - 3)
// }
// function mul(num,callback){
//     return callback(num * 2)
// }

// function operation(num){
//     return mul(num,(result1) =>{
//         return sub(result1,(result2)=>{
//             return add(result2,(finalResult)=>{
//                 return finalResult
//             })
//         })
//     })
// }

// let result = operation(5)
// console.log(result)