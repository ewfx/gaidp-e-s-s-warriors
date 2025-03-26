import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Chat.css";

interface ChatAreaProps {
  selectedChat: string;
  chats: { id: number; sender: string; message: string; fileUrl?: string }[];
  fetchChats: (chatId: string) => void;
}

const API_URL = "http://localhost:8000/api/v1";

const ChatArea: React.FC<ChatAreaProps> = ({
  selectedChat,
  chats,
  fetchChats,
}) => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [zipFile, setZipFile] = useState<Blob | null>(null); // Store received ZIP file
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, zipFile]);

  const sendMessage = async () => {
    if (!input.trim() && !selectedFile) return;

    const formData = new FormData();
    formData.append("message", input);

    try {
      await axios.post(`${API_URL}/chats/${selectedChat}/send`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      fetchChats(selectedChat);
      setInput("");
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
        responseType: "blob", // Expect a ZIP file as response
      });

      setZipFile(response.data); // Store the ZIP file blob

      fetchChats(selectedChat);
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const downloadZip = () => {
    if (!zipFile) return;

    const url = window.URL.createObjectURL(zipFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="chat-area">
      <div className="chat-history">
        {chats.map((chat) => (
          <div key={chat.id} className={`chat-message ${chat.sender}`}>
            {chat.message}
            {chat.fileUrl && (
              <a href={chat.fileUrl} target="_blank" rel="noopener noreferrer">
                📂 {chat.fileUrl.split("/").pop()}
              </a>
            )}
          </div>
        ))}

        {/* Show ZIP file received message and download button */}
        {zipFile && (
          <div className="chat-message bot">
            📦 Your processed data is ready:
            <button onClick={downloadZip}>📥 Download data.zip</button>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload</button>
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatArea;
