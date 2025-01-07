function createProfile(obj){
    let {name,age}= obj;
    let {interests : [primaryInterest, secondaryInterest]}=obj

    let newObj={
        name,
        age,
        primaryInterest,
        secondaryInterest
    }
    return newObj;
}

let user = {name : "John", age : 20, interests : ["Reading", "Travelling", "Cricket"]}
let newUser=createProfile(user)
console.log(newUser)