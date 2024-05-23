'use strict'
//creazione array di oggetti

const persone01 = [
    {
        nome: 'mario',
        cognome: 'rossi',
        eta: 52
    },
    {
        nome: 'luca',
        cognome: 'neri',
        eta: 18
    },
    {
        nome: 'fraco',
        cognome: 'bianchi',
        eta: 16
    },
    {
        nome: 'maria',
        cognome: 'verdi',
        eta: 78
    },
]

/*
1. utilizzo il metodo map degli array e lo assegno ad una variabile persone02. (gli argomenti index e array non sono utilizzati, ma scritti come memo)
2. all'interno della funzione anonima di .map, definisco una variabile info contenente la stringa 'può guidare'
3. verifico la proprietà eta dell'oggetto iterato. se < 18, il valore di info diventa 'non può guidare'
4. creo un nuovo oggetto newObj nel quale copio le proprietà dell'oggetto iterato con il metodo spread e aggingo la proprietà info, che ha valore della variabile info
5. ritorno il nuvo oggetto

persone02 è un nuovo array con lunghezza pari all'array di origine (persone01), contenente tutti i newObj ai quali è stata aggiunta la proprietà info
*/
const persone02 = persone01.map(function (persona, index, array) {
    let info = 'può guidare'

    if (persona.eta < 18) {
        info = 'non può guidare'

    }
    const newObj = {
        ...persona,
        info
    }

    return newObj
}
)

//stampo entrambe gli array per verificare che siano effettivamente differenti
console.log(persone02)
console.log(persone01)