let displayValue = '';

/*function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
} */
function appendToDisplay(value) {
    if (displayValue.length < 10) {
        displayValue += value;
        updateDisplay();
    } else {
        alert("Maximum input length reached."); 
    }
}
function clearDisplay() {
  displayValue = '';
  updateDisplay();
}
function deleteLastInput() {
    displayValue = displayValue.slice(0, -1); 
    updateDisplay();
  }
function performOperation(operation) {
  if (!/[\+\-\*\/]$/.test(displayValue)) {
    displayValue += operation;
  }
  updateDisplay();
} 

function calculateResult() {
    try {
      if (/\/0/.test(displayValue)) {
        throw new Error("Division by zero");
      }
      displayValue = eval(displayValue).toString();
    } catch (error) {
      displayValue = 'Error'; 
    }
    updateDisplay();
  }

function updateDisplay() {
  document.getElementById('display').innerText = displayValue || '0';
}

