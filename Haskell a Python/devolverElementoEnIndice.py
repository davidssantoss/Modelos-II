def devolverElementoEnIndice(lista, indice):
    if (indice >= len(lista) or lista == []):
        return None
    else:
        return lista[indice]