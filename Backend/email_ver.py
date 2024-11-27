import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def send_email( to_email, subject, content):
    message = Mail(
        from_email=(os.environ.get('EMAIL_USERNAME')),
        to_emails=to_email,
        subject=subject,
        html_content='<strong>and easy to do anywhere, even with Python</strong>')
        
        
    try:
        sg = SendGridAPIClient(os.environ.get('EMAIL_API'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e.message)