// Get references to form elements
const budgetForm = document.getElementById("budgetForm");
const resultDisplay = document.getElementById("resultDisplay");
const resultsSection = document.querySelector('.results');

// Handle form submission
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
    const savings = parseFloat(document.getElementById("savings").value);

    // Validate input
    if (isNaN(income) || isNaN(expenses) || isNaN(savings)) {
        resultDisplay.innerHTML = `<p class="error">Please enter valid numbers for all fields.</p>`;
        resultsSection.style.display = "block";
        return;
    }

    // Calculate remaining balance and savings progress
    const remainingBalance = income - expenses;
    const savingsProgress = remainingBalance >= savings ? "Goal Achieved!" : "Still Need: ₹" + (savings - remainingBalance).toFixed(2);

    // Display the results
    resultDisplay.innerHTML = `
        <p><strong>Total Income: </strong>₹${income.toFixed(2)}</p>
        <p><strong>Total Expenses: </strong>₹${expenses.toFixed(2)}</p>
        <p><strong>Remaining Balance: </strong>₹${remainingBalance.toFixed(2)}</p>
        <p><strong>Savings Goal: </strong>₹${savings.toFixed(2)}</p>
        <p><strong>Status: </strong>${savingsProgress}</p>
    `;

    // Show the results section
    resultsSection.style.display = "block";
});
