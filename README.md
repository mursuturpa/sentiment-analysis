

1. A Jupyter Notebook for fine-tuning code and data preprocessing.
2. Backend code for your API (e.g., FastAPI or Flask).
3. React front-end code (or a minimal example) that interacts with your API.

---

INSTALL DEPENDENCIES

1. **Python Environment**  
   - Create and activate a virtual environment, or use your preferred environment setup.  
   - Install Python dependencies (e.g., FastAPI, transformers, etc.).  
     ```
     pip install -r requirements.txt
     ```
     or list them in your own environment.yml/pyproject.toml.

2. **React Front-End**  
   - Navigate to the React front-end directory.  
   - Install dependencies using npm or yarn:  
     ```
     npm install
     ```
     or
     ```
     yarn
     ```

---

RUNNING THE NOTEBOOK AND API LOCALLY

1. **Notebook**  
   - Open your Jupyter Notebook (e.g., `sentiment_notebook.ipynb`) in Jupyter Lab, Jupyter Notebook, or Colab.  
   - Run all cells to process data, train models, and/or interact with Hugging Face.

2. **API**  
   - In your terminal, go to the directory containing your main API file (e.g., `main.py`).  
   - Start the server (FastAPI example):
     ```
     uvicorn main:app --host 0.0.0.0 --port 8000
     ```
   - Your API should be available at `http://localhost:8000`.

3. **React Front-End**  
   - In a separate terminal, go to your React front-end directory.  
   - Start the development server:
     ```
     npm start
     ```
   - Open `http://localhost:3000` in your browser (by default) to interact with the UI.

---

USING THE ENDPOINTS

1. **/analyze/** (POST)  
   - **Request Body**:
     ```json
     {
       "text": "Your text to analyze",
       "model": "custom" // or "llama"
     }
     ```
   - **Response**:
     ```json
     {
       "sentiment": "positive" | "negative",
       "confidence": 0.98
     }
     ```
2. **Testing the Endpoints**:
   - **curl**:
     ```
     curl -X POST \
          -H "Content-Type: application/json" \
          -d '{"text":"This is a great movie","model":"custom"}' \
          http://localhost:8000/analyze/
     ```
   - **Python requests**:
     ```python
     import requests

     response = requests.post(
       "http://localhost:8000/analyze/",
       json={"text":"This is a great movie","model":"custom"}
     )
     print(response.json())
     ```
   - **Postman**:
     - Select **POST** method.
     - Set **Content-Type** to **application/json**.
     - Body → raw → insert JSON above.
     - Click **Send** and view results.

