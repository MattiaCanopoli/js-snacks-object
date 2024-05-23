# snack 4 - persone

Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
Es risultato finale:

[
  { nome: 'Tizio', cognome: 'Caio', eta: 20, info:'Tizio Caio può guidare' },
  { nome: 'Pippo', cognome: 'pluto', eta: 15, info:'Pippo Pluto NON può guidare' }
]

1. creare array01 con n oggetti {
    nome: 'xxx',
    cognome: 'yyy'
    eta: nn
}

2. creare un array02 vuoto
3. accedere agli oggetti con ciclo for su array01
4. definire una variabile per 'frase'
5. per ogni oggetto, verificare il campo età
6. se eta < 18, frase = 'indice_oggetto.nome + non può guidare'; altrimenti frase= 'indice_oggetto.nome può guidare
7. aggiungere frase all'oggetto
8. aggiungere oggetto all'array 02
