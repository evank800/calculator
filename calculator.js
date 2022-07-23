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

const operators = document.querySelectorAll('#add, #subtract, #multiply, #divide')
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

let operationArr = [];

//clears the whole display(AC button)
function clearDisplay(){
    while(display.firstChild){
        display.removeChild(display.firstChild);
    }
    operationArr = []; // array becomes empty
    console.log(operationArr)
}

//delete the last number or operator(Del button)
function deleteNum(){
    display.removeChild(display.lastChild) // removes the last number or operator from the display
    operationArr.pop(); // removes the last element of the array
    console.log(operationArr)
}

//displays/deletes/clears numers/operators in div and stores/delete them in/from the array
function displayNum(){
    one.addEventListener("click", function(e){
        const oneShow = document.createElement('div')
        oneShow.textContent = 1;
        display.appendChild(oneShow);
        operationArr.push(oneShow.textContent); // store the num or operator in the array
        console.log(operationArr)
    })

    two.addEventListener("click", function(e){
        const twoShow = document.createElement('div')
        twoShow.textContent = 2;
        display.appendChild(twoShow);
        operationArr.push(twoShow.textContent);
        console.log(operationArr)
    })
    three.addEventListener("click", function(e){
        const threeShow = document.createElement('div')
        threeShow.textContent = 3;
        display.appendChild(threeShow);
        operationArr.push(threeShow.textContent);
        console.log(operationArr)
    })
    four.addEventListener("click", function(e){
        const fourShow = document.createElement('div')
        fourShow.textContent = 4;
        display.appendChild(fourShow);
        operationArr.push(fourShow.textContent);
        console.log(operationArr)
    })
    five.addEventListener("click", function(e){
        const fiveShow = document.createElement('div')
        fiveShow.textContent = 5;
        display.appendChild(fiveShow);
        operationArr.push(fiveShow.textContent);
        console.log(operationArr)
    })
    six.addEventListener("click", function(e){
        const sixShow = document.createElement('div')
        sixShow.textContent = 6;
        display.appendChild(sixShow);
        operationArr.push(sixShow.textContent);
        console.log(operationArr)
    })
    seven.addEventListener("click", function(e){
        const sevenShow = document.createElement('div')
        sevenShow.textContent = 7;
        display.appendChild(sevenShow);
        operationArr.push(sevenShow.textContent);
        console.log(operationArr)
    })
    eight.addEventListener("click", function(e){
        const eightShow = document.createElement('div')
        eightShow.textContent = 8;
        display.appendChild(eightShow);
        operationArr.push(eightShow.textContent);
        console.log(operationArr)
    })
    nine.addEventListener("click", function(e){
        const nineShow = document.createElement('div')
        nineShow.textContent = 9;
        display.appendChild(nineShow);
        operationArr.push(nineShow.textContent);
        console.log(operationArr)
    })
    zero.addEventListener("click", function(e){
        const zeroShow = document.createElement('div')
        zeroShow.textContent = 0;
        display.appendChild(zeroShow);
        operationArr.push(zeroShow.textContent);
        console.log(operationArr)
    })
    plus.addEventListener("click", function(e){
        const plusShow = document.createElement('div')
        plusShow.textContent = '+';
        display.appendChild(plusShow);
        operationArr.push(plusShow.textContent);
        console.log(operationArr)
    })
    minus.addEventListener("click", function(e){
        const minusShow = document.createElement('div')
        minusShow.textContent = '-';
        display.appendChild(minusShow);
        operationArr.push(minusShow.textContent);
        console.log(operationArr)
    })
    times.addEventListener("click", function(e){
        const timesShow = document.createElement('div')
        timesShow.textContent = 'x';
        display.appendChild(timesShow);
        operationArr.push(timesShow.textContent);
        console.log(operationArr)
    })
    over.addEventListener("click", function(e){
        const overShow = document.createElement('div')
        overShow.textContent = '/';
        display.appendChild(overShow);
        operationArr.push(overShow.textContent);
        console.log(operationArr)
    })

    remove.addEventListener("click", function(e){
        deleteNum();
    })
    clear.addEventListener("click", function(e){
        clearDisplay();
    })
}

function readArr(){
    operators.forEach(operator => operator.addEventListener("click", function(e){
        let tempArr = [];
        for(let i = 0; i < operationArr.length; i++){
            //concatenate all the numbers before an operator
            if(operationArr[i] == "+" || operationArr[i] == "-" || operationArr[i] == "x" || operationArr[i] == "/"){
                let concatNum = Number(tempArr.join(''));
                let tempOps = operationArr[i];
                clearDisplay();
                const showNum = document.createElement('div');
                showNum.textContent = concatNum;
                display.appendChild(showNum);
                operationArr.push(concatNum);
                const showOps = document.createElement('div');
                showOps.textContent = tempOps;
                display.appendChild(showOps);
                operationArr.push(tempOps)
            }
            else{
                tempArr.push(operationArr[i])
            }
        }
        console.log(operationArr)
    }))

}
//equals.addeEventlistener
//concatenate numbers in the array

displayNum()
readArr()