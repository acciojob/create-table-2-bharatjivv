function createTable() {
  const table = document.getElementById('myTable');
  table.innerHTML = ''; // Clear existing content

  // Get user inputs
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  const rn = parseInt(rows, 10);
  const cn = parseInt(cols, 10);

  // Validate inputs
  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numeric values.");
    return;
  }

  if (rn <= 0 || cn <= 0) {
    alert("Row and column numbers must be greater than zero.");
    return;
  }

  // Create table
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
