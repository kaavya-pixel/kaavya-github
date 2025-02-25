function calculateEMI() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTerm = parseInt(document.getElementById("loanTerm").value);

    // Validate inputs
    if (isNaN(loanAmount) || loanAmount <= 0) {
        showResult("Please enter a valid loan amount greater than 0.", "error");
        return;
    }

    if (isNaN(interestRate) || interestRate <= 0) {
        showResult("Please enter a valid interest rate greater than 0.", "error");
        return;
    }

    if (isNaN(loanTerm) || loanTerm <= 0) {
        showResult("Please enter a valid loan term greater than 0.", "error");
        return;
    }

    // Convert annual interest rate to monthly rate
    let monthlyInterestRate = interestRate / 12 / 100;
    
    // Calculate the number of payments (months)
    let totalMonths = loanTerm * 12;

    // EMI Calculation Formula
    let emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
              (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    // Show result with success message
    showResult(`Your EMI is ₹${emi.toFixed(2)}`, "success");
}

// Function to display the result
function showResult(message, type) {
    const resultElement = document.getElementById("emiResult");
    resultElement.textContent = message;
    resultElement.classList.remove("success", "error");
    resultElement.classList.add(type);
}
