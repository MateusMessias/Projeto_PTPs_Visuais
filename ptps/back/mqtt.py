import paho.mqtt.client as mqtt
import json

# dados necessarios para conexao e envio de dados
broker_address = "broker.emqx.io"
broker_port = 1883
broker_topic = 'produtos/skol'
client_id = 'paho-mqtt-01'

# conexao
client = mqtt.Client(client_id)
client.connect(broker_address, broker_port)

# escrita da mensagem
msg = {
        'teamperatura_de_passagem': '53.2',
        'lote': 20220908,
        'pais': 'Chile'
 }

# encapsulando num objeto JSON
msg = json.dumps(msg)

# publicacao dos dados
client.publish(broker_topic, msg)
