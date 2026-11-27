import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel


class New_Member(BaseModel):
    name: str
    email: str


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

# ASSIGNMENT 3: Create a POST endpoint that accepts a JSON payload containing a new member's name and email address. Validate the input data and return a success message if the member is created successfully, or an error message if the input data is invalid.


@app.post("/new_member")
def create_new_member(member: New_Member):
    if not member.name.strip() or not member.email.strip():
        raise HTTPException(
            status_code=400, detail="Name and email are required fields.")

    return {"status_code": 201, "message": f"New member {member.name} with email {member.email} has been created successfully."}
