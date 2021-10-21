function positiveArrElements( paramArr ) {
    const exampleArr = [];
    
    if (paramArr.length === 0) return 'Array is empty';
        
    for (let i = 0; i < paramArr.length; i++) {
        if (paramArr[i] >= 0) exampleArr.push(paramArr[i]);      
    }  
    return exampleArr.length === 0 ?  null : exampleArr;
}

console.log( positiveArrElements([-1, -6, 2, 8, -2, 8]));
console.log( positiveArrElements([-1, -3, -2, -2]));
console.log( positiveArrElements([]));