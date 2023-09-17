function calculateNumbers(var1, var2){
    return var1 + var2;
}

function multiplyNumbers(var1, var2){
    return var1 * var2;
}

function divideNumbers(var1, var2){
    return var1 / var2;
}

function subtractNumbers(var1, var2){    
    return var1 - var2;
}

function powerNumbers(var1, var2){
    return Math.pow(var1, var2);
}

function squareRoot(var1){
    return Math.sqrt(var1);
}   

function jiecheng(var1){
    var result = 1;
    for(var i = 1; i <= var1; i++){
        result *= i;
    }
    return result;
}