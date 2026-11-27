import os 
from dotenv import load_dotenv
from fastapi import FastAPI
import uvicorn

load_dotenv()

PORT = int(os.getenv("PORT", "8001"))
CLUB_SECRET_KEY = os.getenv("CLUB_SECRET_KEY", "")

app = FastAPI()
@app.get("/")
def read_status():
    return{
        "name": "Michael Ampofo",
        "year": 2,
        "status": "ACC Backend Ready",
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=PORT, reload=True)
