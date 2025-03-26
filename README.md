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
📽️ [Video Demo](#) (if applicable)  
🖼️ Screenshots:

![Screenshot 1](link-to-image)

## 💡 Inspiration

What inspired you to create this project? Describe the problem you're solving.

## ⚙️ What It Does

Explain the key features and functionalities of your project.

## 🛠️ How We Built It

Briefly outline the technologies, frameworks, and tools used in development.

## 🚧 Challenges We Faced

Describe the major technical or non-technical challenges your team encountered.

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
