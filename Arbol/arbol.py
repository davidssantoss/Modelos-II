class Nodo:
    def __init__(self, valor, izquierda = None, derecha = None):
        self.valor = valor
        self.izquierda = izquierda
        self.derecha = derecha    

def buscar(arbol, valor):
        if arbol == None:
            return False
        elif arbol.valor == valor:
            return True
        elif valor > arbol.valor:
            return buscar(arbol.derecha, valor)
        else:
            return buscar(arbol.izquierda, valor)

def aLista(arbol):
        if arbol == None:
            return []
        return aLista(arbol.izquierda) + [arbol.valor] + aLista(arbol.derecha)

def insertarValor(arbol, valor):
        if arbol == None:
            return Nodo(valor)
        elif valor > arbol.valor:
            return Nodo(arbol.valor, arbol.izquierda, insertarValor(arbol.derecha, valor))                        
        else:
            return Nodo(arbol.valor, insertarValor(arbol.izquierda, valor), arbol.derecha)

def insertarLista(arbol, lista):
        if (lista == []):
            return arbol
        elif (lista [1:] == []):
            return insertarValor(arbol, lista[0])
        else:
            return insertarLista(insertarValor(arbol, lista[0]), lista[1:])     

print(aLista(insertarLista(Nodo(25, Nodo(18, Nodo(10), Nodo(20))), [11, 45,49,51])))
