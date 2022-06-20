

const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

function myEach(arr, cb){
    if(Array.isArray(arr)){
        for(let i=0; i<arr.length; i++){
            cb(arr[i])
        }
        return arr
    }
    else{
        for(let elem in arr){
            cb(arr[elem])
        }
        return arr
    }
}

function myMap(arr, cb){
    if(Array.isArray(arr)){
        let clonedArr = []
        for(let i=0; i<arr.length; i++){
            clonedArr.push(cb(arr[i]))
        }
        return clonedArr
    }
    let clonedObj = []
    for(let elem in arr){
        let x = cb(arr[elem])
        // clonedObj[elem] = x
        clonedObj.push(x)
    }
    return clonedObj
}

// myMap({one: 1, two: 2, three: 3, four: 4}, (e)=> e + 3)
// console.log(myMap([1,2,3,4,5], (e)=> e+3))

function myReduce(arr, reducer, acc){
    if(typeof acc === 'number'){
        for(let elem of arr){
            acc = reducer(acc, elem)
        }
        return acc
    }
    else{
        if(Array.isArray(arr)){
            let newAcc = arr[0]
            for(let i=1; i<arr.length; i++){
                newAcc = reducer(newAcc, arr[i])
            }
            return newAcc
        }
        let clonedArr = []
        for(let elem in arr){
            clonedArr.push(arr[elem])
        }

        let newAcc = clonedArr[0]
        for(let i=1; i<clonedArr.length; i++){
            newAcc = reducer(newAcc, clonedArr[i])
        }
        return newAcc
    }
}

// console.log(myReduce([1,2,3,4], (acc, val, collection) => (acc + (val * 3)), 10))
// console.log(myReduce({one: 1, two: 2, three: 3, four: 4}, (acc, val, collection) => (acc + (val * 3))))

function myFind(arr, finder){
    let found = undefined
    for(let elem of arr){
        if(finder(elem)){
            found = elem
            break
        }
    }
    return found
}

function myFilter(arr, filterer){
    let found = []
    if(Array.isArray(arr)){
        for(let elem of arr){
            if(filterer(elem)){
                found.push(elem)
            }
        }
        return found
    }
    let newArr = []
    for(let elem in arr){
        newArr.push(arr[elem])
    }
    // myFilter(newArr, filterer)   ---not sure why recursion isn't working
    for(let elem of newArr){
        if(filterer(elem)){
            found.push(elem)
        }
    }
    return found
}

//console.log(myFilter([1,2,3,2,5,2], (e)=>e===4))
//console.log(myFilter({ two: 2, three: 3, five: 5, seven: 7}, e=>e>10))

function mySize(arr){
    if(Array.isArray(arr)){
        return arr.length
    }
    let newArr = []
    for(let elem in arr){
        newArr.push(elem)
    }
    return newArr.length
}

function myFirst(arr, n){
    if(arguments.length > 1){
        return arr.slice(0, n)
    }else{
        return arr[0]
    }
}

// console.log(myFirst([1,2,3,4,5,6,7,8], 3))
// console.log(myFirst([1,2,3,4,5,6,7,8]))

function myLast(arr, n){
    if(arguments.length > 1){
        return arr.slice(arr.length-n)
    }
    else{
        return arr[arr.length-1]
    }
}

function myKeys(obj){
    let keys = []
    for(let elem in obj){
        keys.push(elem)
    }
    return keys
}

//console.log(myKeys({ two: 2, three: 3, five: 5, seven: 7}))

function myValues(obj){
    let val = []
    for(let elem in obj){
        val.push(obj[elem])
    }
    return val
}

let newArr = []
function myFlatten(arr){
    if(arguments[1] === true){
        for(let i=0; i<arr.length; i++){
            newArr.push(arr[i])
        }
        return newArr
    }
    for(let i=0; i<arr.length; i++){
        if(!Array.isArray(arr[i])){
            newArr.push(arr[i])
            continue
        }
        myFlatten(arr[i])
    }
    return newArr
}

console.log(myFlatten([1, [2, 3], [[4, 5], 6, [7, [8, 9]]]]))