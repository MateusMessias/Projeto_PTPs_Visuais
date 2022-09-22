import paho.mqtt.client as mqtt

# dados necessarios para conexao e envio de dados
broker_address = "broker.emqx.io"
broker_port = 1883
broker_topic = 'produtos/skol'
client_id = 'paho-mqtt-01'

# conexao
def mqtt_connect():
    client = mqtt.Client(client_id)
    client.connect(broker_address, broker_port)
    return client

# publicacao dos dados
def mqtt_publish(client, payload):
    client.publish(broker_topic, payload)