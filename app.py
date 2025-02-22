from flask import Flask, render_template, request

app = Flask(__name__)

# Route for Home Page
@app.route('/')
def index():
    return render_template('index.html')

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
            return render_template('index.html', future_value=round(future_value, 2))
        except Exception as e:
            return render_template('index.html', error_message=f"Invalid input: {e}. Please try again.")
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
