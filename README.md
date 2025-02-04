Sentiment Analysis Project
This repository contains a full-stack sentiment analysis project. It includes:

Jupyter Notebook: For data preprocessing, model fine-tuning, and experimentation.
Backend (FastAPI or Flask): Serves a RESTful API for analyzing sentiment.
React Front-End: A minimal example to interact with the backend.
Table of Contents
Project Overview
Repository Structure
Installation
Running the Notebook Locally
Running the API Locally
Using the API Endpoints
Running the React Front-End
Project Overview
This project showcases a sentiment analysis pipeline using a fine-tuned Hugging Face transformer model. The Jupyter Notebook demonstrates how to:

Download and preprocess the IMDB dataset
Fine-tune a model (e.g., DistilBERT) on the dataset
Evaluate and save the trained model
A FastAPI (or Flask) backend exposes the trained model via a REST API. A React UI provides a simple interface where users can input text, select a model, and see real-time sentiment predictions.

Repository Structure
bash
Kopioi
Muokkaa
.
├── README.md
├── requirements.txt            # Python dependencies
├── sentiment_notebook.ipynb    # Jupyter notebook (fine-tuning, data processing)
├── backend/
│   ├── main.py                 # FastAPI or Flask application
│   ├── requirements.txt        # Optional: separate backend requirements
│   └── ...
└── frontend/
    ├── package.json
    ├── src/
    │   ├── App.js             # Main React component (UI logic)
    │   └── index.js
    └── ...
sentiment_notebook.ipynb – Demonstrates dataset loading, preprocessing, and fine-tuning.
backend/main.py – Contains the API (e.g., FastAPI) serving the sentiment analysis endpoint.
frontend/ – Minimal React application for interacting with the backend.
Installation
Prerequisites
Python 3.8+
Node.js & npm (if you plan to run the React front-end locally)
1. Clone the Repository
bash
Kopioi
Muokkaa
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
2. Install Python Dependencies
In the project root or backend/ (wherever requirements.txt is located):

bash
Kopioi
Muokkaa
pip install -r requirements.txt
If you have a separate backend/requirements.txt, go into backend and run the same command.

Running the Notebook Locally
Navigate to the project directory:
bash
Kopioi
Muokkaa
cd <your-repo>
Start Jupyter (or JupyterLab):
bash
Kopioi
Muokkaa
jupyter notebook
or
bash
Kopioi
Muokkaa
jupyter lab
Open sentiment_notebook.ipynb.
Run all cells to:
Download/preprocess the data.
Fine-tune the model.
Evaluate and save the model.
Running the API Locally
Navigate to the backend folder (or wherever your FastAPI/Flask app is):
bash
Kopioi
Muokkaa
cd <your-repo>/backend
Run the application with uvicorn (for FastAPI):
bash
Kopioi
Muokkaa
uvicorn main:app --host 0.0.0.0 --port 8000
If you’re using Flask, do something like:
bash
Kopioi
Muokkaa
python main.py
The API will be available at:
http://localhost:8000 (FastAPI)
or
http://localhost:5000 (Flask, if that’s your port).
Using the API Endpoints
Assuming the FastAPI endpoint is running at http://localhost:8000:

Swagger/OpenAPI Docs:
Visit http://localhost:8000/docs in your browser to see interactive API docs.

Analyze Sentiment Endpoint (POST /analyze/):

Endpoint: http://localhost:8000/analyze/
Example Request:
bash
Kopioi
Muokkaa
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"text": "I absolutely loved this film!", "model": "custom"}' \
     http://localhost:8000/analyze/
Example JSON Payload:
json
Kopioi
Muokkaa
{
  "text": "I absolutely loved this film!",
  "model": "custom"
}
Response:
json
Kopioi
Muokkaa
{
  "sentiment": "positive",
  "confidence": 0.9875
}
Running the React Front-End
Navigate to the frontend folder:
bash
Kopioi
Muokkaa
cd <your-repo>/frontend
Install dependencies:
bash
Kopioi
Muokkaa
npm install
Start the development server:
bash
Kopioi
Muokkaa
npm start
By default, React runs at http://localhost:3000.
Make sure the backend is running at http://localhost:8000.
The React app will call http://localhost:8000/analyze/ for sentiment analysis requests.
Troubleshooting
CORS Issues: If your React app is on port 3000 and backend is on 8000, add CORS middleware to the backend:
python
Kopioi
Muokkaa
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
API Keys: If you’re using external APIs (e.g., Groq Cloud), ensure your keys are set as environment variables.
