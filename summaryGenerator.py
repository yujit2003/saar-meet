import sys
import requests
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
headers = {"Authorization": f"Bearer {'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'}"}


def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
# Email credentials
sender_email = "nikhiljain876900@gmail.com"
sender_password = "qndm lcva ajeu ytfi"
receiver_emails = ["swn.himanshu@gmail.com","cisjoksa@gmail.com","12115028@nitkkr.ac.in"]#add furthur mails here


current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
time = str(current_time)
message = MIMEMultipart()
message["From"] = sender_email
message["To"] = ", ".join(receiver_emails)  
message["Subject"] = "MEET_SUMMARY [ "+  time + "]"# yaha par meeting id add karni hai bs + karke string of id likhna hai
                                  #collection ka use karke

# print(sys.argv[1])

text_generated  = str(sys.argv[1])

output = query({"inputs": text_generated})

body = output[0]["summary_text"]
message.attach(MIMEText(body, "plain"))#yaha attechement like pdf vgerah kar skate h if needed

with smtplib.SMTP("smtp.gmail.com", 587) as server:
    server.starttls()
    server.login(sender_email, sender_password)
    text = message.as_string()
    server.sendmail(sender_email, receiver_emails, text)
print(str(body))
# print()
