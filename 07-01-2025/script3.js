function updateEmployeeDetails(emp,role){
    newEmp={
        ...emp,
        role : role
    }
    return newEmp
}

const employee = {name: "vamshi", role: "SDE", age: 20, location: "India"} 
let emp = updateEmployeeDetails (employee, "Software Developer")
console.log(emp)