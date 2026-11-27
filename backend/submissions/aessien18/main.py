import os

from dotenv import load_dotenv
from fastapi import FastAPI

# Assigment 2: Create a .env file in the root directory of your project and add a variable called CLUB_SECRET_KEY with a secret key value. Load this variable in your FastAPI application using the python-dotenv package.
load_dotenv()
PORT = os.getenv("PORT", 8000)
CLUB_SECRET_KEY = os.getenv("CLUB_SECRET_KEY")


# ASSIGMENT 1: Create a FastAPI application that returns your name and KNUST index number when the root endpoint is accessed.
app = FastAPI()


@app.get("/")
def read_root():
    return {"Name": "Angela Essien",
            "KNUST_index/year": "9018323/year 3",
            "status_message": "Acc Backend Ready", }
