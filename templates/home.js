// Get references to the form and elements
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Login Form Submit handler
loginForm.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get the input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation logic (customize as needed)
    if (!username || !password) {
        displayErrorMessage("Please fill in both fields.");
        return;
    }

    // Here we would normally call the server for validation
    // For now, let's simulate a successful login or error
    simulateLogin(username, password);
});

// Function to simulate the login response
function simulateLogin(username, password) {
    // Sample condition for login validation (you can replace this with
