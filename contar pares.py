def contarPares(lista):
    if lista == []:
        return 0
    else:
        if lista[0] % 2 == 0:
            return 1 + contarPares(lista[1:])
        return contarPares(lista[1:])

