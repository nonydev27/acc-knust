import os
from fastapi import FastAPI

app = FastAPI()

PORT = int(os.getenv("PORT", "8000"))
CLUB_SECRET_KEY = os.getenv("CLUB_SECRET_KEY", "")


@app.get("/")
def root():
    return {
        "name": "Godfred Agyemang Boateng",
        "knust_year": 2,
        "status": "ACC Backend Ready",
        "port": PORT,
        "secret_configured": bool(CLUB_SECRET_KEY),
    }
