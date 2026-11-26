from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Name": "Angela Essien",
            "KNUST_index/year": "9018323/year 3",
            "status_message": "Acc Backend Ready", }
