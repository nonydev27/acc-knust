from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_status():
    return {   
      "name": "Michael Ampofo",
      "year": 2,
      "status": "ACC Backend Ready",
    }
