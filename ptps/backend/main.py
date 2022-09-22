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

class Aspecto_Visual(BaseModel):
    linha: int
    molde_1: int
    molde_2: int
    molde_3: int
    molde_4: int
    molde_5: int
    molde_6: int
    molde_7: int
    molde_8: int
    molde_9: int
    molde_10: int
    molde_11: int
    molde_12: int
    molde_13: int
    molde_14: int
    molde_15: int
    molde_16: int


@app.post("/rotuladoras_add")
async def create_item(item: Rotuladora):
    payload = {
        "linha": item.linha,
        "garrafa_1": item.garrafa_1,
        "garrafa_1": item.garrafa_1,
        "garrafa_1": item.garrafa_1,
        "garrafa_1": item.garrafa_1,
        "codificacao": item.codificacao
    }
    payload = json.dumps(payload)

    client = mqtt.mqtt_connect()
    mqtt.mqtt_publish(client,payload)



@app.post("/aspecto_visual_add")
async def create_item(item: Aspecto_Visual):
    payload = {
    "linha": item.linha,
    "molde_1": item.molde_1,
    "molde_2": item.molde_2,
    "molde_3": item.molde_3,
    "molde_4": item.molde_4,
    "molde_5": item.molde_5,
    "molde_6": item.molde_6,
    "molde_7": item.molde_7,
    "molde_8": item.molde_8,
    "molde_9": item.molde_9,
    "molde_10": item.molde_10,
    "molde_11": item.molde_11,
    "molde_12": item.molde_12,
    "molde_13": item.molde_13,
    "molde_14": item.molde_14,
    "molde_15": item.molde_15,
    "molde_16": item.molde_16
    }
    payload = json.dumps(payload)

    client = mqtt.mqtt_connect()
    mqtt.mqtt_publish(client,payload)
