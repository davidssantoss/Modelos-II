from io import StringIO
import numpy as np

class Nodo ():
    def __init__(self, valor, hijos = []):
        self.valor = valor
        self.hijos = hijos

def getFile():
    return np.genfromtxt(StringIO((open('matriz.txt', 'r')).read()), delimiter = ' ')
    
if __name__ == '__main__':
    print (getFile())
    
