function calculate() {
  var inputField = document.getElementById("inputField");
  var resultElement = document.getElementById("result");
  var inputValue = parseFloat(inputField.value);

  if (isNaN(inputValue)) {
    resultElement.textContent = "Neplatný vstup";
    return;
  }

  var selectedFunction = prompt("Zadejte funkci (factorial, sin, cos, log):");

  switch (selectedFunction) {
    case "factorial":
      resultElement.textContent = "Výsledek: " + factorial(inputValue);
      break;
    case "sin":
      resultElement.textContent = "Výsledek: " + Math.sin(inputValue);
      break;
    case "cos":
      resultElement.textContent = "Výsledek: " + Math.cos(inputValue);
      break;
    case "log":
      resultElement.textContent = "Výsledek: " + Math.log(inputValue);
      break;
    default:
      resultElement.textContent = "Neznámá funkce";
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
