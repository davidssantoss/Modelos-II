class Nodo:
    def __init__(self, valor, izq = None, der = None):
        self.valor = valor
        self.izq = izq
        self.der = der
    
class Principal():
    #nodo = Nodo()
    def buscar(self, arbol, valor):
        if arbol == None:
            return False
        if arbol.valor == valor:
            return True
        if arbol.valor > valor:
            return self.buscar(arbol.izq, valor)
        return self.buscar(arbol.der, valor)

    def a_lista(self, arbol):
        if arbol == None:
            return []
        return self.a_lista(arbol.izq) + [arbol.valor] + self.a_lista(arbol.der)

    def insertar(self, arbol, valor):
        if (arbol == None):
            return Nodo(valor)
        if arbol.valor > valor:
            return Nodo(arbol.valor, self.insertar(arbol.izq, valor), arbol.der)                        
        return Nodo(arbol.valor, arbol.izq, self.insertar(arbol.der, valor))
    
    def a_arbol(self, lista):
        return Nodo(lista[0], a_arbol())
    
def main():
    arbol = Nodo(25, Nodo(18, Nodo(10), Nodo(20)), Nodo(50, Nodo(40)))
    clas = Principal()
    clas.insertar(arbol, 45)
    print(clas.a_lista(arbol))
    

if __name__ == '__main__':
    main()
