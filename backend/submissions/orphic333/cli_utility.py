import json
import os

def load_env_file():
    env_path = os.path.join(os.path.dirname(__file__), ".env")
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    os.environ.setdefault(key.strip(), value.strip())

load_env_file()
port = os.getenv("PORT", "8000")
secret_key = os.getenv("CLUB_SECRET_KEY")

data = {
    'name': "Kwaku Duodu Baidoo",
    'index_number': "3130925",
    'status': "ACC Backend Ready",
    'port': port,
    'secret_key_loaded': bool(secret_key)
}   
def member_registration(member_data):
    name = member_data.get("name",  "").strip()
    email = member_data.get("email", "").strip()

    if not name or not email:
        return {"status": "error",
                "message": "Both name and email are required."}

    return {"status": "success",
            "message": f"Member {name} with email {email} registered successfully.",
            "data": {
                "name": name,
                "email": email
            }}
if __name__ == "__main__":
    print(json.dumps(data, indent=4))


