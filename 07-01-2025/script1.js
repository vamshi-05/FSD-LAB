function mergeArrays( ...ar){
    let newArr=[]
    for(let a of ar){
        newArr=[...newArr,...a]
    }
    return newArr;
}

let arr=mergeArrays([1, 2], [3, 4], [5, 6]);
console.log(arr)