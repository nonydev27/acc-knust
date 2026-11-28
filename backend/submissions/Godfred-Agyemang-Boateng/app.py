import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

PORT = int(os.getenv("PORT", "8000"))
CLUB_SECRET_KEY = os.getenv("CLUB_SECRET_KEY", "")


class MemberRegistration(BaseModel):
    name: str
    email: str


@app.get("/")
def root():
    return {
        "name": "Godfred Agyemang Boateng",
        "knust_year": 2,
        "status": "ACC Backend Ready",
        "port": PORT,
        "secret_configured": bool(CLUB_SECRET_KEY),
    }


@app.post("/members/register", status_code=201)
def register_member(member: MemberRegistration):
    name = member.name.strip()
    email = member.email.strip()

    if not name or not email:
        raise HTTPException(
            status_code=400,
            detail="Both 'name' and 'email' are required and must be non-empty.",
        )

    return {
        "status": "registered",
        "member": {
            "name": name,
            "email": email,
        },
    }
