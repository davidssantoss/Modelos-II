def listaEstaOrdenada(lista):
    if (lista == [0]):
        return True
    elif(len(lista) <= 2):
        return lista[0] <= lista[1]
    else:
        return (lista[0] <= lista[1] and listaEstaOrdenada(lista[1::]))