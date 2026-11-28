from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def info():
    return {
        "name": "Joseph Boafo Afful",
        "knust_index_number": "3121325",
        "year": 2,
        "status": "ACC Backend Ready",
    }

