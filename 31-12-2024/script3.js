let person={
   name : "vamshi",
   age  : 20,
   greet : ()=>{
        console.log(`Hii ${name}, Good Evening`)
    }
}

person.isAdult = function(){
    console.log(person.age)
    if(person.age >=18 )
        console.log("Yes, The person is Adult")
    else
        console.log("No, The person is not Adult")
}

console.log("Name : ",person.name)
person.greet()
person.isAdult()