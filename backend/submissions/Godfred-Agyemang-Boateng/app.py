from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {
        "name": "Godfred Agyemang Boateng",
        "knust_year": 2,
        "status": "ACC Backend Ready",
    }
