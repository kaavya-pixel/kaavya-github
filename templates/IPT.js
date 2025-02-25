// your code goes here
// Get references to HTML elements
const incomeInput = document.getElementById('income');
const expensesInput = document.getElementById('expenses');
const investmentsInput = document.getElementById('investments');
const trackButton = document.getElementById('trackButton');

const netIncomeResult = document.getElementById('netIncomeResult');
const totalInvestmentsResult = document.getElementById('totalInvestmentsResult');
const netSavingsResult = document.getElementById('netSavingsResult');

const expenseNameInput = document.getElementById('expenseName');
const expenseAmountInput = document.getElementById('expenseAmount');
const addExpenseButton = document.getElementById('addExpenseButton');

const expenseList = document.getElementById('expenseList').getElementsByTagName('tbody')[0];

// Track finance details
trackButton.addEventListener('click', function () {
    const income = parseFloat(incomeInput.value) || 0;
    const expenses = parseFloat(expensesInput.value) || 0;
    const investments = parseFloat(investmentsInput.value) || 0;

    // Calculate financial data
    const netIncome = income - expenses;
    const netSavings = netIncome + investments;

    // Display results
    netIncomeResult.textContent = `Net Income: ₹${netIncome}`;
    totalInvestmentsResult.textContent = `Total Investments: ₹${investments}`;
    netSavingsResult.textContent = `Net Savings: ₹${netSavings}`;
});

// Add expense to the list
addExpenseButton.addEventListener('click', function () {
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
        const row = expenseList.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = expenseName;
        cell2.textContent = `₹${expenseAmount}`;

        // Clear input fields
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    } else {
        alert('Please provide valid expense details.');
    }
});
