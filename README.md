# 🚀 Project Name

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## 🎯 Introduction
A brief overview of your project and its purpose. Mention which problem statement are your attempting to solve. Keep it concise and engaging.

## 🎥 Demo
🔗 [Live Demo](#) (if applicable)  
📹 [Video Demo](#) (if applicable)  
🖼️ Screenshots:

![Screenshot 1](link-to-image)

## 💡 Inspiration
I am solving problem of automating data profiling task. Given advancement in llm field their capabilities have imroved drastically.
One of the biggest demand is to use llm to automate code generation from a task like human. However it still lacks that capability.
So I have used domain knowledge to reduce the scope and hence increase the chances of it generating correct code.

## ⚙️ What It Does
Our project provides two interfaces. 
   - 1  Chat interface through which user can talk to chatbot which has expertise on document and get the profiling tool
   - 2  Upload csv file:- And it will do anomaly detection as well as run extract validation rule from document and run the functions on each data row.
## 🛠️ How We Built It
We have mainly used langraph and free llm from Google or Minstral AI. 
Our idea was to use vector store to save document and validation rules tables  which can be later retrieved by llm according to user input and will be used
for generating validation rule. This validation rule matches our predefined list function which encompasses most of the validation requirements as per the function.
Then llm output list of field,validation_function, extra_function_argument which we used to execute the function and generate list  of errors
## 🚧 Challenges We Faced
llms are pretty unreliable.
We were starting it newly

## 🏃 How to Run
1. Clone the repository  
   ```sh
   git clone https://github.com/your-repo.git
   ```
2. Install dependencies  
   ```sh
   npm install  # or pip install -r requirements.txt (for Python)
   ```
3. Run the project  
   ```sh
   npm start  # or python app.py
   ```

## 🏗️ Tech Stack
- 🔹 Frontend: React / Vue / Angular
- 🔹 Backend: Node.js / FastAPI / Django
- 🔹 Database: PostgreSQL / Firebase
- 🔹 Other: OpenAI API / Twilio / Stripe

## 👥 Team
- **Your Name** - [GitHub](#) | [LinkedIn](#)
- **Teammate 2** - [GitHub](#) | [LinkedIn](#)
