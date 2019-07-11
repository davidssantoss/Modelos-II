hombre('juan').
hombre('pablo')

mujer('maria')
mujer('marcela')

padre('pablo','juan').
padre('pablo','marcela').
padre('juan','maria').

esposo(A,B) :- padre(A,C), madre(B,C).
esposa(A,B) :- madre(A,C), padre(B,C).

hermanos(A,B) :- padre(C,A), padre(C,B), A \== B.
hermanos(A,B) :- madre(C,A), madre(C,B), A \== B.

hijo(A,B) :- hombre(A), padre(B,A).
hijo(A,B) :- hombre(A), madre(B,A).

hija(A,B) :- mujer(A), padre(B,A).
hija(A,B) :- mujer(A), madre(B,A).

sobrino(A,B) :- hijo(A,C), hermanos(C,B).
sobrina(A,B) :- hija(A,C), hermanos(C,B).

primo(A,B) :- sobrino(A,C), hijo(B,C).
primo(A,B) :- sobrino(A,C), hija(B,C).

prima(A,B) :- sobrina(A,C), hijo(B,C).
prima(A,B) :- sobrina(A,C), hija(B,C).

nieto(A,B) :- hijo(A,C), hijo(C,B).
nieto(A,B) :- hijo(A,C), hija(C,B).

nieta(A,B) :- hija(A,C), hijo(C,B).
nieta(A,B) :- hija(A,C), hija(C,B).

bisnieto(A,B) :- hijo(A,C), nieto(C,B).
bisnieto(A,B) :- hijo(A,C), nieta(C,B).

bisnieta(A,B) :- hija(A,C), nieto(C,B).
bisnieta(A,B) :- hija(A,C), nieta(C,B).

abuelo(A,B) :- hombre(A), nieto(B,A).
abuelo(A,B) :- hombre(A), nieta(B,A).

bisabuelo(A,B) :- hombre(A), bisnieto(B,A).
bisabuelo(A,B) :- hombre(A), bisnieta(B,A).

bisabuela(A,B) :- mujer(A), bisnieto(B,A).
bisabuela(A,B) :- mujer(A), bisnieta(B,A).

abuela(A,B) :- mujer(A), nieta(B,A).
abuela(A,B) :- mujer(A), nieta(B,A).

tio(A,B) :- hombre(A), sobrino(B,A).
tio(A,B) :- hombre(A), sobrina(B,A).

tia(A,B) :- mujer(A), sobrino(B,A).
tia(A,B) :- mujer(A), sobrina(B,A).

hermanoPolitico(A,B) :- hombre(A), esposo(B,C), hermanos(A,C).
hermanoPolitico(A,B) :- hombre(A), esposa(B,C), hermanos(A,C).

hermanaPolitica(A,B) :- mujer(A), esposo(B,C), hermanos(A,C).
hermanaPolitica(A,B) :- mujer(A), esposa(B,C), hermanos(A,C).

familiar(A,B) :- padre(A,B).
familiar(A,B) :- abuelo(A,B).
familiar(A,B) :- hermanos(A,B).
