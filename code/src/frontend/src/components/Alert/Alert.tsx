import React, { useEffect } from "react";
import "./Alert.css";

interface RightPanelProps {
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  zipFile: Blob | null;
  handleUpload: () => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  selectedFile,
  setSelectedFile,
  zipFile,
  handleUpload,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
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
    setSelectedFile(null);
  };

  useEffect(() => {}, [selectedFile]);

  return (
    <div className="right-panel">
      <h3>Upload CSV File</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>

      {zipFile && (
        <div className="chat-message bot">
          📦 Your processed data is ready:
          <button onClick={downloadZip}>📥 Download Generated Reports</button>
        </div>
      )}
    </div>
  );
};

export default RightPanel;
