const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = "";
    } else if (value === '=') {
      try {
        currentInput = calculateExpression(currentInput);
      } catch {
        currentInput = "Error";
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});
function calculateExpression(expr) {
  let operator;
  if (expr.includes("+")) operator = "+";
  else if (expr.includes("-")) operator = "-";
  else if (expr.includes("*")) operator = "*";
  else if (expr.includes("/")) operator = "/";
  else return expr;

  let parts = expr.split(operator);
  let num1 = parseFloat(parts[0]);
  let num2 = parseFloat(parts[1]);

  if (isNaN(num1) || isNaN(num2)) return "Error";

  switch (operator) {
    case "+": return (num1 + num2).toString();
    case "-": return (num1 - num2).toString();
    case "*": return (num1 * num2).toString();
    case "/": return (num2 !== 0 ? (num1 / num2).toString() : "Error");
    default: return "Error";
  }
}

