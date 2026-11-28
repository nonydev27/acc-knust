import os
from dotenv import load_dotenv
from fastapi import FastAPI

load_dotenv()

PORT = int(os.getenv("PORT", 8000))
CLUB_SECRET_KEY = os.getenv("CLUB_SECRET_KEY")

app = FastAPI()

@app.get("/")
def info():
    return {
        "name": "Joseph Boafo Afful",
        "knust_index_number": "3121325",
        "year": 2,
        "status": "ACC Backend Ready",
        "secret_loaded": CLUB_SECRET_KEY is not None,
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=PORT)


