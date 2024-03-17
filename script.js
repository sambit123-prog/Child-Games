let score = 0;
let currentQuestion = 0;
let selectedOperation = 'addition'; // Default operation

let correctAnswer = 0; // Define correctAnswer variable globally

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 90) + 10; // Generate 2-digit numbers
    const num2 = Math.floor(Math.random() * 90) + 10;
    let questionText = '';

    switch (selectedOperation) {
        case 'addition':
            questionText = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case 'subtraction':
            questionText = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case 'multiplication':
            questionText = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
            break;
        case 'division':
            questionText = `${num1} / ${num2}`;
            correctAnswer = Math.floor(num1 / num2); // For simplicity, round division down to nearest whole number
            break;
    }

    document.getElementById('question').textContent = questionText;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('user-answer').value);

    if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
        score++;
        document.getElementById('result').textContent = 'Correct!';
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').textContent = 'Incorrect! Try again.';
        document.getElementById('result').style.color = 'red';
    }

    document.getElementById('score-value').textContent = score;
    currentQuestion++;

    if (currentQuestion >= 10) {
        document.getElementById('question').textContent = 'Game Over!';
        document.getElementById('user-answer').disabled = true;
        document.getElementById('score').textContent = 'Final Score: ' + score;
    } else {
        generateQuestion(); // Generate new question after checking answer
    }
}

function selectOperation(operation) {
    selectedOperation = operation;
    currentQuestion = 0;
    score = 0;
    document.getElementById('score-value').textContent = score;
    document.getElementById('user-answer').disabled = false;
    document.getElementById('result').textContent = '';
    generateQuestion();
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('score-value').textContent = score;
    document.getElementById('user-answer').disabled = false;
    document.getElementById('result').textContent = '';
    generateQuestion();
}

function goBack() {
    window.location.href = "index.html";
}

// script.js

function showOperationOptions() {
    document.getElementById('operation-options').style.display = 'block';
    document.getElementById('table-options').style.display = 'none';
}

function showTableOptions() {
    document.getElementById('table-options').style.display = 'block';
    document.getElementById('operation-options').style.display = 'none';
}
function goBack() {
    window.location.href = "index.html";
}

function goBack() {
    window.location.href = "index.html";
}

function goBack() {
    window.location.href = "index.html";
}

function generateTable(number) {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; // Clear previous table content
    
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = `${number} x ${i} = ${number * i}`;
        row.appendChild(cell);
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}



function goBack() {
    window.location.href = "index.html";
}


function getRandomColor() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Return RGB value in hexadecimal format
    return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
}
//



