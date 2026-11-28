import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, field_validator
import uvicorn

load_dotenv()

PORT = int(os.getenv("PORT", "8001"))
CLUB_SECRET_KEY = os.getenv("CLUB_SECRET_KEY", "")

app = FastAPI()


class MemberRegistration(BaseModel):
    name: str
    email: str

    @field_validator("name", "email")
    @classmethod
    def must_not_be_blank(cls, value: str) -> str:
        cleaned = value.strip()
        if not cleaned:
            raise ValueError("Field cannot be empty or whitespace")
        return cleaned


@app.get("/")
def read_status():
    return {
        "name": "Michael Ampofo",
        "year": 2,
        "status": "ACC Backend Ready",
    }


@app.post("/register", status_code=status.HTTP_201_CREATED)
def register_member(member: MemberRegistration):
    if "@" not in member.email or "." not in member.email.split("@")[-1]:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid email address format",
        )

    return {
        "message": "Member registered successfully",
        "member": {
            "name": member.name,
            "email": member.email,
        },
    }


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=PORT, reload=True)
