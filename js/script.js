function positiveArrElements( paramArr ) {
    const exampleArr = [];
    
    if (paramArr.length === 0) {
        return 'Array is empty';
    } else {
        for (let i = 0; i < paramArr.length; i++) {
            if (paramArr[i] >= 0) {
                const currentPositiveNumber = paramArr[i];
                exampleArr.push(currentPositiveNumber);      
             }
        } 
    } 
    if (exampleArr.length === 0) {
        return null;
    } else { 
        return exampleArr; 
    }
}

console.log( positiveArrElements([-1, -6, 2, 8, -2, 8]));
console.log( positiveArrElements([-1, -3, -2, -2]));
console.log( positiveArrElements([]));