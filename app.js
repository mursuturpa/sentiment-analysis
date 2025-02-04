import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [model, setModel] = useState("custom"); // default model
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    try {
      setError(null);
      setResult(null);

      // Make a POST request to your backend API.
      // If running locally and your FastAPI is on http://localhost:8000,
      // the endpoint is: http://localhost:8000/analyze/
      // In production, replace with your server URL.

      const response = await fetch("http://localhost:8000/analyze/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: inputText,
          model: model,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", fontFamily: "sans-serif" }}>
      <h1>Sentiment Analysis</h1>

      {/* Text input */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="userInput">Enter Text to Analyze:</label>
        <br />
        <textarea
          id="userInput"
          rows={3}
          style={{ width: "100%", marginTop: "5px" }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      {/* Dropdown menu for model selection */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="modelSelect">Select Model:</label>
        <br />
        <select
          id="modelSelect"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          style={{ marginTop: "5px" }}
        >
          <option value="custom">Custom Model</option>
          <option value="llama">Llama 3</option>
        </select>
      </div>

      {/* Button to trigger sentiment analysis */}
      <button onClick={handleAnalyze} style={{ marginBottom: "20px" }}>
        Analyze Sentiment
      </button>

      {/* Display the result */}
      {result && (
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h3>Result</h3>
          <p>
            <strong>Sentiment:</strong> {result.sentiment}
          </p>
          <p>
            <strong>Confidence:</strong> {result.confidence.toFixed(4)}
          </p>
        </div>
      )}

      {/* Display any error messages */}
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}

export default App;
