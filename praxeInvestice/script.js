let incomeTotal = 0;
let expenseTotal = 0;

function addTransaction() {
  const type = document.getElementById("type").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    alert("Zadejte platnou částku.");
    return;
  }

  if (type === "income") {
    incomeTotal += amount;
  } else if (type === "expense") {
    expenseTotal += amount;
  }

  updateSummary();
  updateTransactionTable(type, amount);
}

function updateSummary() {
  document.getElementById("income-total").textContent = incomeTotal.toFixed(2);
  document.getElementById("expense-total").textContent =
    expenseTotal.toFixed(2);
  document.getElementById("net-income").textContent = (
    incomeTotal - expenseTotal
  ).toFixed(2);
}

function updateTransactionTable(type, amount) {
  const table = document.getElementById("transaction-table");
  const newRow = table.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  cell1.textContent = type === "income" ? "Příjem" : "Výdaj";
  cell2.textContent = amount.toFixed(2);
}
