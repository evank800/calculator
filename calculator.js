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

const operators = document.querySelectorAll('#add, #subtract, #multiply, #divide, #equals')
const numbers = document.querySelectorAll('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero')
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
const equals = document.querySelector('#equals')
const remove = document.querySelector('#delete')
const clear = document.querySelector('#clear');

let operationArr = [];
let numArr = [];
let toBeCalculated = [];

/* let operatorArr = []; */

//clears the whole display(AC button)
function clearDisplay(){
    while(display.firstChild){
        display.removeChild(display.firstChild);
    }
    /* operationArr = []; */ // array becomes empty
    console.log(operationArr)
}

//delete the last number or operator(Del button)
function deleteNum(){
    display.removeChild(display.lastChild) // removes the last number or operator from the display
    numArr.pop(); // removes the last element of the array
}

//displays/deletes/clears numers/operators in div and stores/delete them in/from the array
function displayNum(){
    one.addEventListener("click", function(e){
        const oneShow = document.createElement('div')
        oneShow.textContent = 1;
        display.appendChild(oneShow);
        /* operationArr.push(oneShow.textContent); */ // store the num or operator in the array
        numArr.push(oneShow.textContent)
        console.log(numArr)
    })

    two.addEventListener("click", function(e){
        const twoShow = document.createElement('div')
        twoShow.textContent = 2;
        display.appendChild(twoShow);
        /* operationArr.push(twoShow.textContent) */
        numArr.push(twoShow.textContent);
        console.log(numArr)
    })
    three.addEventListener("click", function(e){
        const threeShow = document.createElement('div')
        threeShow.textContent = 3;
        display.appendChild(threeShow);
        /* operationArr.push(threeShow.textContent) */
        numArr.push(threeShow.textContent);
        console.log(numArr)
    })
    four.addEventListener("click", function(e){
        const fourShow = document.createElement('div')
        fourShow.textContent = 4;
        display.appendChild(fourShow);
        /* operationArr.push(fourShow.textContent) */
        numArr.push(fourShow.textContent);
        console.log(numArr)
    })
    five.addEventListener("click", function(e){
        const fiveShow = document.createElement('div')
        fiveShow.textContent = 5;
        display.appendChild(fiveShow);
        /* operationArr.push(fiveShow.textContent) */
        numArr.push(fiveShow.textContent);
        console.log(numArr)
    })
    six.addEventListener("click", function(e){
        const sixShow = document.createElement('div')
        sixShow.textContent = 6;
        display.appendChild(sixShow);
        /* operationArr.push(sixShow.textContent); */
        numArr.push(sixShow.textContent);
        console.log(numArr)
    })
    seven.addEventListener("click", function(e){
        const sevenShow = document.createElement('div')
        sevenShow.textContent = 7;
        display.appendChild(sevenShow);
        /* operationArr.push(sevenShow.textContent); */
        numArr.push(sevenShow.textContent)
        console.log(numArr)
    })
    eight.addEventListener("click", function(e){
        const eightShow = document.createElement('div')
        eightShow.textContent = 8;
        display.appendChild(eightShow);
        /* operationArr.push(eightShow.textContent); */
        numArr.push(eightShow.textContent)
        console.log(numArr)
    })
    nine.addEventListener("click", function(e){
        const nineShow = document.createElement('div')
        nineShow.textContent = 9;
        display.appendChild(nineShow);
        /* operationArr.push(nineShow.textContent); */
        numArr.push(nineShow.textContent)
        console.log(numArr)
    })
    zero.addEventListener("click", function(e){
        const zeroShow = document.createElement('div')
        zeroShow.textContent = 0;
        display.appendChild(zeroShow);
        /* operationArr.push(zeroShow.textContent); */
        numArr.push(zeroShow.textContent)
        console.log(numArr)
    })
    plus.addEventListener("click", function(e){
        const plusShow = document.createElement('div')
        plusShow.textContent = '+';
        display.appendChild(plusShow);
        /* operatorArr.push(plusShow.textContent);
        console.log(operatorArr) */
    })
    minus.addEventListener("click", function(e){
        const minusShow = document.createElement('div')
        minusShow.textContent = '-';
        display.appendChild(minusShow);
        /* operatorArr.push(minusShow.textContent);
        console.log(operatorArr) */
    })
    times.addEventListener("click", function(e){
        const timesShow = document.createElement('div')
        timesShow.textContent = 'x';
        display.appendChild(timesShow);
        /* operatorArr.push(timesShow.textContent);
        console.log(operatorArr) */
    })
    over.addEventListener("click", function(e){
        const overShow = document.createElement('div')
        overShow.textContent = '/';
        display.appendChild(overShow);
        /* operatorArr.push(overShow.textContent);
        console.log(operatorArr) */
    })

    remove.addEventListener("click", function(e){
        deleteNum();
    })
    clear.addEventListener("click", function(e){
        clearDisplay();
        numArr = [];
    })
}

function concatenateNum(array){
    const num = Number(array.join(''));
    return num;
}

function concatNum(){
    numbers.forEach(number => number.addEventListener("click", function(e){
        let newNum = concatenateNum(numArr);
        console.log(newNum);
        tempArr = [];
        tempArr.push(newNum);
        console.log(tempArr)
        /* const showNewNum = document.createElement('div')
        showNewNum.textContent = newNum
        display.removeChild(display.firstChild)
        display.appendChild(showNewNum) */
    }))
}


function addOperator(){
    operators.forEach(operator => operator.addEventListener("click", function(e){
        operationArr.push(operator.textContent);
        numArr = [];
        console.log(operationArr)
        console.log(numArr)
        toBeCalculated.push(tempArr[0]);
        console.log(toBeCalculated)
    }))
}

function calculation(){
    let result;

    displayNum();

    let tempArr;
    concatNum();
    addOperator();

    equals.addEventListener('click', function(e){
        result = add(Number((toBeCalculated[0])),Number([toBeCalculated[1]]))
        console.log(result)
    })
}
/* function readArr(){
    let tempArr = [];
    operators.forEach(operator => operator.addEventListener("click", function(e){
        let countOp = 0;
        for(let i = 0; i < operationArr.length; i++){
            //concatenate all the numbers before an operator
            if(operationArr[i] == "+" || operationArr[i] == "-" || operationArr[i] == "x" || operationArr[i] == "/"){
                countOp += 1;
                
                let concatNum = concatenateNum(numArr);
                let tempOps = operationArr[i];

                clearDisplay(); //clears the display

                const showNum = document.createElement('div');
                showNum.textContent = concatNum;
                display.appendChild(showNum);
                operationArr.push(concatNum);//concat. number pushed to the array

                const showOps = document.createElement('div');
                showOps.textContent = tempOps;
                display.appendChild(showOps);
                operationArr.push(tempOps); //operator pushed to the array
                

                tempArr = operationArr;
                if (countOp == 2){
                    operationArr = tempArr.concat(operationArr);
                    console.log(operationArr)
                }
                numArr = [];
            }
        }
        console.log(operationArr)
    }))
}*/

//equals.addeEventlistener
//concatenate numbers in the array

/* displayNum()
concatNum()
addOperator()
 */

calculation()