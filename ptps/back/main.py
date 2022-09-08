from serial_comunication import SerialApp

ser = SerialApp() # Criacao do objeto
ser.update_port() # Atualiza as portas conectadas ao computador

ser.serial_obj.port = 'COM3' # Nome da porta
ser.serial_obj.baudrate = 9600 # Taxa de transmissao
ser.connect_serial() # Conexao

# Recebendo 10 buffers da porta serial
for i in range(10):
    ser.read_serial()

ser.close_serial() # Fecha a conexao
