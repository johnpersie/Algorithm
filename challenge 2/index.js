function SmallestIntegerFinder(array){
         return(array.sort((a,b)=>a-b))[0]
     }

console.log(SmallestIntegerFinder([34, 15, 88, 2]))
console.log(SmallestIntegerFinder([34, -345, -1, 100]))