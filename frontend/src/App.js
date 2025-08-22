import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/message")   // 🔹 matches backend URL
      .then((response) => {
        setMessage(response.data.message); // backend returns {message: "..."}
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend ↔ Backend Test</h1>
      <p>Message from backend: <b>{message}</b></p>
    </div>
  );
}

export default App;
