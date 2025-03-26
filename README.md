# 🚀 Gen-Ai

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

A brief overview of your project and its purpose. Mention which problem statement you are attempting to solve. Keep it concise and engaging.

## 🎥 Demo

🔗 [Live Demo](#) (if applicable)  
📽️ [Video Demo](https://github.com/ewfx/gaidp-e-s-s-warriors/blob/main/artifacts/demo/2025-03-26%2021-12-51.mkv)

🖼️ Screenshots:

![screenshot](https://github.com/ewfx/gaidp-e-s-s-warriors/blob/main/artifacts/demo/Screenshot%202025-03-26%20210406.png?raw=true)

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

## 🏢 Tech Stack

- 🔹 Frontend: React
- 🔹 Backend: FastAPI
- 🔹 Other: OpenAI API, LangChain

## 👥 Team

- **Aquib Nawaz** - [GitHub](https://github.com/) | [LinkedIn](#)
- **Abhishek Singh** - [GitHub](#) | [LinkedIn](#)
- **Amiya Patra** - [GitHub](https://github.com/amiyakpatra) | [LinkedIn](#)
- **Arun Nagar** - [GitHub](https://github.com/arunnagar012) | [LinkedIn](#)
- **Dherya Pratap Singh Rana** - [GitHub](https://github.com/ranaDherya) | [LinkedIn](#)

This project consists of a frontend and a backend. Follow the instructions below to set up and run the application.

## Prerequisites

- **Node.js** (for frontend) - Download from [nodejs.org](https://nodejs.org/)
- **Python 3.10+** (for backend) - Download from [python.org](https://www.python.org/)
- **pip** (Python package manager)

## Installation and Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/ewfx/gaidp-e-s-s-warriors
cd code/src
```

### 2️⃣ Backend Setup

Navigate to the backend folder and install dependencies:

```sh
cd backend
pip install -r requirements.txt
```

Add API keys to .env file inside backend folder
API Keys for ---

1.  [Google Ai Studio](https://aistudio.google.com/app/apikey)
2.  [GROQ_API_KEY](https://console.groq.com/keys)
3.  [MISTRAL AI](https://console.mistral.ai/api-keys)

#### Run Backend Server

```sh
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### 3️⃣ Frontend Setup

Navigate to the frontend folder and install dependencies:

```sh
cd ../frontend
npm install
```

#### Run Frontend Server

```sh
npm start
```

## Running the Project

Once both frontend and backend servers are running:

- Open `http://localhost:3000/` to access the frontend.
- The backend API is accessible at `http://localhost:8000/`.
