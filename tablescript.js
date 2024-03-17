// Get the table container
const tableContainer = document.getElementById('table-container');

// Create the table element
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Loop to generate the multiplication table grid
for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');
    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td');
        cell.textContent = `${i} x ${j} = ${i * j}`;
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}

// Append tbody to the table
table.appendChild(tbody);

// Append the table to the table container
tableContainer.appendChild(table);
