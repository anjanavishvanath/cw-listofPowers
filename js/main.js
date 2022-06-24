function power(num){
    let arr = []
    for(let i=0;i<=num;i++){
        arr.push(Math.pow(2,i))
    }
    return arr
}


let powOfTwo = power(4)
console.log(powOfTwo)