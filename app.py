from flask import Flask, request, render_template_string
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.example.com'  # Replace with your SMTP server
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@example.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'your-email-password'  # Replace with your email password

mail = Mail(app)

@app.route('/')
def index():
    return render_template_string(open("index.html").read())

@app.route('/submit_form', methods=['POST'])
def submit_form():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    msg = Message("New Contact Form Submission",
                  sender=email,
                  recipients=['your-email@example.com'])  # Replace with your email
    msg.body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

    try:
        mail.send(msg)
        return "Message sent successfully!"
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(debug=True)
