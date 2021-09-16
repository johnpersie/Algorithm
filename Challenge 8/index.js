const minMax =(array) =>{
    let arr1 = []
    console.log(...array)
    arr1.push(Math.max(...array));
    arr1.push(Math.min(...array))
    return arr1
}
console.log(minMax([1,2,3,4,5]))
console.log(minMax([2334454,5]))
console.log(minMax([1]))