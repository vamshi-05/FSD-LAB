function createProfile(obj){

    let { name, email} = obj;
    return {name,email}

}

let obj={
    name : "Vamshi",
    age : 20,
    email : "vamshi@gmail.com",
    address : "Hyderabad"
}
let newObj = createProfile(obj)
console.log(newObj)