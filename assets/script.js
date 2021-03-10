function dis(val) { 
    document.getElementById("screen").value+=val 
}            

function addition() {
    operand = '+';
    getResult();
}

function soustraction() {
    operand = '-';
    getResult();
}

function multiplication() {
    operand = '*';
    getResult();
}

function division() {
    operand = '/';
    getResult();
}

function clr(){
        document.getElementById("screen").value = ""
}

function solve() 
{ 
    var x = document.getElementById("screen").value 
    var y = eval(x) 
    document.getElementById("screen").value = y 
} 



function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;

    } else if (operator === '-') {
      return firstOperand - secondOperand;

    } else if (operator === '*') {
      return firstOperand * secondOperand;

    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }
  