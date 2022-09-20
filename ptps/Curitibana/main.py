import db
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

@app.get("/rotuladoras")
async def read_rotuladoras():
    conn = db.connect_db()
    if conn:
        return db.db_select(conn,"""SELECT * FROM public.rotuladora;""")


@app.get("/rotuladoras/{item_id}")
async def read_rotuladora_item(item_id: int):
    conn = db.connect_db()
    if conn:
        return db.db_select(conn,f"""SELECT * FROM public.rotuladora WHERE linha={item_id}""")

@app.post("/rotuladoras")
async def create_item(item: Rotuladora):
    conn = db.connect_db()
    if conn:
        db.insert(conn,f"""INSERT INTO public.rotuladora (linha, garrafa_1, garrafa_2, garrafa_3, garrafa_4, codificacao) VALUES ({item.linha}, {item.garrafa_1}, {item.garrafa_2}, {item.garrafa_3}, {item.garrafa_4}, {item.codificacao});""")
    