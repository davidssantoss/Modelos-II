def devolverSumaElementosLista(lista):
    if (lista == []):
        return 0
    else:
        return lista[0] + devolverSumaElementosLista(lista[1:])