def devolverListaInvertida(lista, listaAcumulador):
    if (lista == []):
        return listaAcumulador
    else:
        listaAcumulador.append(lista[-1])
        return devolverListaInvertida(lista[:-1], listaAcumulador)