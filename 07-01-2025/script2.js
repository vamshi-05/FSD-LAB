function calculateTotal(...nums){
    let sum=0;
    for(let n of nums)
        sum+=n;
    return sum;
}

let res=calculateTotal(10, 20, 30, 40);
console.log(res)