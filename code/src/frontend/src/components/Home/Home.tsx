import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Gen-AI Based Data Profiling</h1>
      <p>
        This project leverages Generative AI for data profiling, providing
        insights and structured analysis from unstructured datasets.
      </p>

      <section>
        <h2>Inspiration</h2>
        <p>
          We are solving the problem of automating the data profiling task.
          Given advancements in LLM technology, their capabilities have improved
          drastically. One of the biggest demands is using LLMs to automate code
          generation like a human. However, it still lacks that capability. So,
          we have used domain knowledge to reduce the scope and hence increase
          the chances of generating correct code.
        </p>
      </section>

      <section>
        <h2>⚙️ What It Does</h2>
        <p>Our project provides two interfaces:</p>
        <ul>
          <li>
            <strong>Chat Interface:</strong> Users can interact with a chatbot
            that has expertise in document processing and data profiling tools.
          </li>
          <li>
            <strong>CSV Upload:</strong> Users can upload a CSV file, which
            undergoes anomaly detection and validation rule execution. A zip
            file containing reports for both anomaly detection and validation
            errors is generated.
          </li>
        </ul>
      </section>

      <section>
        <h2>🛠️ How We Built It</h2>
        <p>
          We primarily used LangGraph and free LLMs from Google and Mistral AI.
          Our idea was to use a vector store to save documents and validation
          rule tables, which can be later retrieved by the LLM based on user
          input. These rules are mapped to a predefined list of functions
          encompassing common validation requirements. The LLM generates a list
          of fields, validation functions, and extra function arguments, which
          we execute to identify errors.
        </p>
      </section>

      <section>
        <h2>🚧 Challenges We Faced</h2>
        <p>
          LLMs are inherently unreliable, and we were starting from scratch.
          Ensuring accurate and consistent validation rule generation was a
          significant challenge.
        </p>
      </section>

      <section>
        <h2>🏢 Tech Stack</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> React
          </li>
          <li>
            <strong>Backend:</strong> FastAPI
          </li>
          <li>
            <strong>LLM:</strong> Gemini API, Mistral API, LangChain, LangGraph
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
