function updateProductInfo(product){
    let temp={
        discount : 10,
        inStock : true
    }
    let newObj={
        name : product.name,
        id : product.id,
        ...temp
    }
    return newObj
}

const product = {id: 101, name: "Laptop", price: 1000, category: "Electronics"} 
let obj = updateProductInfo(product)
console.log(obj)