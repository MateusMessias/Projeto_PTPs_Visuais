import mqtt
import json
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Rotuladora(BaseModel):
    linha: int
    garrafa_1: int
    garrafa_2: int
    garrafa_3: int
    garrafa_4: int
    codificacao: int

class Sopro(BaseModel):
    dado1: str
    dado2: int

@app.post("/rotuladoras_add")
async def create_item(item: Rotuladora):
    payload = {
        "linha": item.linha,
        "garrafa_1": item.garrafa_1
    }
    payload = json.dumps(payload)

    client = mqtt.mqtt_connect()
    mqtt.mqtt_publish(client,payload)



@app.post("/aspecto_visual")
async def create_item(item: Sopro):
    payload = {
        "dado1": item.dado1,
        "dado2": item.dado2
    }
    payload = json.dumps(payload)

    client = mqtt.mqtt_connect()
    mqtt.mqtt_publish(client,payload)
