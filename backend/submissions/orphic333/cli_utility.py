import json

data = {
    'name': "Kwaku Duodu Baidoo",
    'index_number': "3130925",
    'status': "ACC Backend Ready"
}   

with open("data.json", mode='w') as f:
    json.dump(data, f, indent=4)
