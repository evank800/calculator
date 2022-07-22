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

const display = document.querySelector('#display');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const times = document.querySelector('#multiply');
const over = document.querySelector('#divide');
const remove = document.querySelector('#delete')
const clear = document.querySelector('#clear');

//clears the whole display
function clearDisplay(){
    while(display.firstChild){
        display.removeChild(display.firstChild);
    }
}

//delete the last number or operator
function deleteNum(){
    display.removeChild(display.lastChild)
}

function displayNum(){
    one.addEventListener("click", function(e){
        const oneShow = document.createElement('div')
        oneShow.textContent = 1;
        display.appendChild(oneShow)
    })
    two.addEventListener("click", function(e){
        const twoShow = document.createElement('div')
        twoShow.textContent = 2;
        display.appendChild(twoShow)
    })
    three.addEventListener("click", function(e){
        const threeShow = document.createElement('div')
        threeShow.textContent = 3;
        display.appendChild(threeShow)
    })
    four.addEventListener("click", function(e){
        const fourShow = document.createElement('div')
        fourShow.textContent = 4;
        display.appendChild(fourShow)
    })
    five.addEventListener("click", function(e){
        const fiveShow = document.createElement('div')
        fiveShow.textContent = 5;
        display.appendChild(fiveShow)
    })
    six.addEventListener("click", function(e){
        const sixShow = document.createElement('div')
        sixShow.textContent = 6;
        display.appendChild(sixShow)
    })
    seven.addEventListener("click", function(e){
        const sevenShow = document.createElement('div')
        sevenShow.textContent = 7;
        display.appendChild(sevenShow)
    })
    eight.addEventListener("click", function(e){
        const eightShow = document.createElement('div')
        eightShow.textContent = 8;
        display.appendChild(eightShow)
    })
    nine.addEventListener("click", function(e){
        const nineShow = document.createElement('div')
        nineShow.textContent = 9;
        display.appendChild(nineShow)
    })
    zero.addEventListener("click", function(e){
        const zeroShow = document.createElement('div')
        zeroShow.textContent = 0;
        display.appendChild(zeroShow)
    })
    plus.addEventListener("click", function(e){
        const plusShow = document.createElement('div')
        plusShow.textContent = '+';
        display.appendChild(plusShow)
    })
    minus.addEventListener("click", function(e){
        const minusShow = document.createElement('div')
        minusShow.textContent = 1;
        display.appendChild(minusShow)
    })
    times.addEventListener("click", function(e){
        const oneShow = document.createElement('div')
        timesShow.textContent = 1;
        display.appendChild(timesShow)
    })
    over.addEventListener("click", function(e){
        const overShow = document.createElement('div')
        overShow.textContent = 1;
        display.appendChild(overShow)
    })

    //equals.addeEventlistener
    remove.addEventListener("click", function(e){
        deleteNum();
    })
    clear.addEventListener("click", function(e){
        clearDisplay();
    })
}

displayNum()