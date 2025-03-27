import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Chat.css";

interface ChatAreaProps {
  selectedChat: string;
}

const API_URL = "http://localhost:8000/api/v1";

const ChatArea: React.FC<ChatAreaProps> = ({ selectedChat }) => {
  const [messages, setMessages] = useState<
    { id: number; sender: string; message: string; fileUrl?: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [zipFile, setZipFile] = useState<Blob | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchMessages();
  }, [selectedChat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, zipFile]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${API_URL}/chats/${selectedChat}`);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() && !selectedFile) return;

    const formData = new FormData();
    formData.append("message", input);

    // if (selectedFile) {
    //   formData.append("file", selectedFile);
    // }

    try {
      const response = await axios.post(
        `${API_URL}/chats/${selectedChat}/send`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessages((prev) => [...prev, response.data]);
      setInput("");
      setSelectedFile(null);
      fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(`${API_URL}/dataset`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob",
      });

      setZipFile(response.data);
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="chat-area">
      <div className="chat-history">
        {messages.map((chat) => (
          <div key={chat.id} className={`chat-message ${chat.sender}`}>
            {chat.message}
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} disabled={!input.trim() && !selectedFile}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
