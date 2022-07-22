function add(a, b){
    const sum = a + b;
    return sum;
}

function subtract(a, b){
    const substract = a - b;
    return substract;
}

function multiply(a, b){
    const mul = a * b;
    return mul
}

function divide(a, b) {
    const div = a / b;
    return div;
}

function operate(operator, a, b){
    if (operator == "+"){
        return add(a, b);
    }
    else if (operator == "-"){
        return subtract(a, b);
    }
    else if (operator == "*"){
        return multiply(a, b)
    }
    else if (operator == "/"){
        return divide(a, b)
    }
}
