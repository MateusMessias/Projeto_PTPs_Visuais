import mqtt
import json
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Rotuladora(BaseModel):
    linha: str
    garrafa_1: str
    garrafa_2: str
    garrafa_3: str
    garrafa_4: str
    codificacao: str

class Aspecto_Visual(BaseModel):
    linha: str
    molde_1: str
    molde_2: str
    molde_3: str
    molde_4: str
    molde_5: str
    molde_6: str
    molde_7: str
    molde_8: str
    molde_9: str
    molde_10: str
    molde_11: str
    molde_12: str
    molde_13: str
    molde_14: str
    molde_15: str
    molde_16: str

class Espessura(BaseModel):
    linha: str
    molde: str
    espessura_zona: float
    ombro_1: float
    ombro_2: float
    ombro_3: float
    corpo_1: float
    corpo_2: float
    corpo_3: float
    base_1: float
    base_2: float
    base_3: float
    curvatura_pe: float
    injecao_1: float
    injecao_2: float

class Explosao_Partida(BaseModel):
    linha: str
    molde: str
    pressao: float
    porcentagem: float


class Explosao_Hora(BaseModel):
    linha: str
    molde: str
    pressao: float
    porcentagem: float
    peso_base: float

class Peso(BaseModel):
    linha: str
    molde: str
    peso_ombro: float
    peso_corpo: float
    peso_base: float

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


@app.post("/espessura_add")
async def create_item(item: Espessura):
    payload = {
        "linha": item.linha,
        "molde": item.molde,
        "espessura_zona": item.espessura_zona,
        "ombro_1": item.ombro_1,
        "ombro_2": item.ombro_2,
        "ombro_3": item.ombro_3,
        "corpo_1": item.corpo_1,
        "corpo_2": item.corpo_2,
        "corpo_3": item.corpo_3,
        "base_1": item.base_1,
        "base_2": item.base_2,
        "base_3": item.base_3,
        "curvatura_pe": item.curvatura_pe,
        "injecao_1": item.injecao_1,
        "injecao_2": item.injecao_2
    }
    payload = json.dumps(payload)

    client = mqtt.mqtt_connect()
    mqtt.mqtt_publish(client,payload)
    

@app.post("/explosao_partida_add")
async def create_item(item: Explosao_Partida):
    payload = {
        "linha": item.linha,
        "molde": item.molde,
        "pressao": item.pressao,
        "porcentagem": item.porcentagem
    }
    payload = json.dumps(payload)

    client = mqtt.mqtt_connect()
    mqtt.mqtt_publish(client,payload)


@app.post("/explosao_hora_add")
async def create_item(item: Explosao_Hora):
    payload = {
        "linha": item.linha,
        "molde": item.molde,
        "pressao": item.pressao,
        "porcentagem": item.porcentagem,
        "peso_base": item.peso_base,
    }
    payload = json.dumps(payload)

    client = mqtt.mqtt_connect()
    mqtt.mqtt_publish(client,payload)


@app.post("/peso_add")
async def create_item(item: Peso):
    payload = {
        "linha": item.linha,
        "molde": item.molde,
        "peso_ombro": item.peso_ombro,
        "peso_corpo": item.peso_corpo,
        "peso_base": item.peso_base,
    }
    payload = json.dumps(payload)

    client = mqtt.mqtt_connect()
    mqtt.mqtt_publish(client,payload)