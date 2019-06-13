class Nodo:
    def _init_(self, valor, hijos = []):    
        self.valor = valor
        self.hijos = hijos

class Coordenada:
    def _init_(self, valor, posX, posY):
        self.valor = valor
        self.posX = posX
        self.posY = posY

def generarListaLaberinto():
    return [x.split() for x in open(input("digite la ruta del laberinto\n"), "r").read().splitlines()]

def generarFilaCoordenadas(fila, indexFila, indexColumna):
    if not fila == []:
        return [Coordenada(fila[0], indexFila, indexColumna)] + generarFilaCoordenadas(fila[1:], indexFila, indexColumna + 1)
    else:
        return []
def printFilaCoordenadas(fila):
    if not fila == []:
        print (fila[0].valor + " " + str(fila[0].posX) + "," str(fila[0].posY))
        return printFilaCoordenadas(fila[1:])
    else:
        pass
        