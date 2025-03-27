import React, { useState, useEffect } from "react";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import ChatArea from "./components/Chats/Chat";
import Home from "./components/Home/Home";
import axios from "axios";
import "./App.css";
import RightPanel from "./components/Alert/Alert";

const API_URL = "http://localhost:8000/api/v1";

interface Chat {
  id: string;
  name: string;
}

const App: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const fetchChatsList = async () => {
    try {
      const response = await axios.get(`${API_URL}/chats`);
      setChats(response.data);
    } catch (error) {
      console.error("Error fetching chat list:", error);
    }
  };

  // Fetch messages for the selected chat
  // const fetchMessages = async (chatId: string) => {
  //   try {
  //     const response = await axios.get(`${API_URL}/chats/${chatId}`);
  //     setMessages(response.data);
  //   } catch (error) {
  //     console.error("Error fetching chat messages:", error);
  //   }
  // };

  // Function to switch chat and fetch messages
  const switchChat = (chatId: string) => {
    if (selectedChat === chatId) {
      setSelectedChat(null);
      return;
    }
    setSelectedChat(chatId);
    // fetchMessages(chatId);
  };

  // Create a new chat
  const createNewChat = async () => {
    try {
      const response = await axios.post(`${API_URL}/chats`);
      setChats((prevChats) => [response.data, ...prevChats]);
      switchChat(response.data.id);
    } catch (error) {
      console.error("Error creating new chat:", error);
    }
  };

  // Delete a chat
  const deleteChat = async (chatId: string) => {
    try {
      await axios.delete(`${API_URL}/chats/${chatId}`);
      setChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));
      fetchChatsList();

      if (selectedChat === chatId) {
        setSelectedChat(null);
        // if (chats.length > 0) fetchMessages(chats[0].id);
      }
    } catch (error) {
      console.error("Error deleting chat:", error);
    }
  };

  useEffect(() => {
    fetchChatsList();
  }, []);

  useEffect(() => {
    if (selectedChat) {
      // fetchMessages(selectedChat);
    }
  }, [selectedChat]);

  // File Download
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [zipFile, setZipFile] = useState<Blob | null>(null);

  // const handleUpload = async () => {
  //   if (!selectedFile) return;

  //   const formData = new FormData();
  //   formData.append("file", selectedFile);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/v1/dataset",
  //       formData,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );

  //     setDownloadLink(response.data.download_url); // Expecting backend to return download URL
  //     console.log(downloadLink);
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };
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

      // fetchChats(selectedChat);
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="container">
      <LeftPanel
        chats={chats}
        switchChat={switchChat}
        createNewChat={createNewChat}
        deleteChat={deleteChat}
      />
      {selectedChat ? (
        <>
          <ChatArea selectedChat={selectedChat} />
          <RightPanel
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            zipFile={zipFile}
            handleUpload={uploadFile}
          />
        </>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
