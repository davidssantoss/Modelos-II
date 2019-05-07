def devolverCuadrados(lista, listaAcumulador):
    if (len(lista) == len(listaAcumulador)):
        return listaAcumulador
    if (lista != []):
        listaAcumulador.append(lista[0]**2)
        return devolverCuadrados(lista[1:], listaAcumulador)