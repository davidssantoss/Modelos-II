def numeroEsPrimo(numero, divisorActual):
    if (numero < 2 or (numero % 2 == 0 and numero > 2)):
        return False
    elif (divisorActual == 1):
        return True
    else:
        return numero % divisorActual != 0 and numeroEsPrimo(numero, divisorActual - 1)


def devolverListaPrimos(valorActual, valorMaximo, listaAcumulador):
    if (valorActual < valorMaximo):
        if (numeroEsPrimo(valorActual, valorActual - 1)):
            listaAcumulador.append(valorActual)
        return devolverListaPrimos(valorActual + 1, valorMaximo, listaAcumulador)
    else:
        return listaAcumulador