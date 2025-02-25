from flask import Flask, render_template, request, redirect, url_for, session, flash

app = Flask(__name__, template_folder='templates')
app.secret_key = 'your_secret_key'  # Required for sessions and flash messages

# Dummy user data for the sake of this example
users = {
    "admin": "password123"  # Example: username and password
}

@app.route('/')

# Route for Home Page (Login Page)
@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Check if username exists and password matches
        if username in users and users[username] == password:
            session['logged_in'] = True  # Set login session
            session['username'] = username  # Store username in session
            flash('Login successful!', 'success')
            return redirect(url_for('dashboard'))  # Redirect to the dashboard page
        else:
            flash('Invalid username or password!', 'error')
            return render_template('home.html')  # Redirect to home page with error message

    return render_template('dash.html')  # Render login page

# Route for Dashboard (after successful login)
@app.route('/dashboard')
def dashboard():
    if 'logged_in' in session:  # Check if user is logged in
        return render_template('dash.html', username=session['username'])
    else:
        flash('You need to log in first!', 'error')
        return redirect(url_for('home'))  # Redirect to login if not logged in

# Route for SIP Calculator
@app.route('/calculate_sip', methods=['POST'])
def calculate_sip():
    if request.method == 'POST':
        try:
            principal = float(request.form['principal'])
            rate = float(request.form['rate'])
            time = int(request.form['time'])
            
            # SIP Formula: A = P * (((1 + r/n) ^ nt) - 1) / (r/n)
            n = 12  # Monthly SIP
            future_value = principal * (((1 + rate / (100 * n)) ** (n * time)) - 1) / (rate / (100 * n))
            return render_template('sip_calculator.html', future_value=round(future_value, 2))
        except Exception as e:
            return render_template('sip_calculator.html', error_message="Invalid input. Please try again.")
    return render_template('sip_calculator.html')

# Route for EMI Calculator
@app.route('/calculate_emi', methods=['POST'])
def calculate_emi():
    if request.method == 'POST':
        try:
            # Get input values
            loan_amount = float(request.form['loan_amount'])  # Principal loan amount
            annual_interest_rate = float(request.form['annual_interest_rate'])  # Annual interest rate
            loan_tenure_years = int(request.form['loan_tenure_years'])  # Loan tenure in years

            # Convert annual interest rate to monthly interest rate
            monthly_interest_rate = (annual_interest_rate / 100) / 12

            # Convert loan tenure to months
            loan_tenure_months = loan_tenure_years * 12

            # Calculate EMI using the formula
            emi = (loan_amount * monthly_interest_rate * (1 + monthly_interest_rate) ** loan_tenure_months) / \
                  ((1 + monthly_interest_rate) ** loan_tenure_months - 1)

            # Return result to the frontend
            return render_template('emi_calculator.html', emi_value=round(emi, 2))
        
        except Exception as e:
            # Handle invalid input or calculation error
            return render_template('emi_calculator.html', error_message="Invalid input. Please try again.")
    return render_template('emi_calculator.html')

# Route to logout
@app.route('/logout')
def logout():
    session.pop('logged_in', None)  # Remove login session
    session.pop('username', None)  # Remove username from session
    flash('You have been logged out.', 'info')
    return redirect(url_for('home'))  # Redirect to home page

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Ensure the application runs on port 5000

