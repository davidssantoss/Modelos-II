def contarPares(lista):
    if lista == []:
        return 0
    elif lista[0] % 2 == 0:
        return 1 + contarPares(lista[1:])
    else:
        return contarPares(lista[1:])
