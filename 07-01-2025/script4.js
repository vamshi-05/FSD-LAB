function mergeUserData(...obj){
    let newObj={}
    for(let o of obj){
        newObj={
            ...newObj,
            ...o
        }

    }
    return newObj
}

const userDetails = {name: "CVR", age: 25} 
const userAddress = {address: "Mangalpally", city: "Hyderabad"} 
const userPreferences = {theme: "Engineering Edu", language: "EN"} 
let obj = mergeUserData(userDetails,userAddress,userPreferences)
console.log(obj)