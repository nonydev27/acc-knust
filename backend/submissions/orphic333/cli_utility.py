import json

data = {
    'name': "Kwaku Duodu Baidoo",
    'index_number': "3130925",
    'status': "ACC Backend Ready"
}   

if __name__ == "__main__":
    print(json.dumps(data, indent=4))
