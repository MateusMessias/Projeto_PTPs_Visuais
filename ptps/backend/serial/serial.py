import serial
import serial.tools.list_ports

class SerialApp():
    def __init__(self):
        self.serial_obj = serial.Serial() # Objeto serial
        self.port_list = [] # Lista vazia para ser alimentada no metodo update
    
    # Metodo de update para portas seriais
    def update_port(self):
        self.port_list = [port.device for port in serial.tools.list_ports.comports()] # Alimentando a lista com todos os dispositivos conectados ao computador
        return self.port_list

    # Metodo de conexao
    def connect_serial(self):
        try:
            self.serial_obj.open()
        except:
            ("Ocorreu um erro ao abrir a conexao")

    # Metodo para receber dados
    def read_serial(self):
        data_reader = self.serial_obj.read(10).decode('utf-8') # Lendo o buffer e decodificando para utf-8
        print(data_reader)

    # Metodo para enviar dados
    def send_serial(self, data):
        if self.serial_obj.is_open():
            data_sender = str(data) + '\n'
            self.serial_obj.write(data_sender.encode())
            self.serial_obj.flushOutput() # Limpa o buffer após o envio

    # Metodo para fechamento de conexao
    def close_serial(self):
        self.serial_obj.close()
