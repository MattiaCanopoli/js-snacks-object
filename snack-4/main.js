'use strict'
//creazione dell'array iniziale
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
//creazione di un array vuoto per contenere i nuovi oggetti
const persone02 = []

/*
CICLO FOR:
1. crea variabile 'patente' con template literal nome + cognome + può guidare
2. valuta l'attributo eta dell'oggetto. se minore di 18 la stringa in 'patente' diventa 'non puà guidare'
3. agginge proprietà info = patente all'oggetto
4. pusha l'oggetto nell'array persone02
*/
for (let i = 0; i < persone01.length; i++) {
    let patente = `${persone01[i].nome} ${persone01[i].cognome} può guidare`

    if (persone01[i].eta < 18) {
        patente = `${persone01[i].nome} ${persone01[i].cognome} non può guidare`
    }

    persone01[i].info = patente

    persone02.push(persone01[i])
}

//stampa in console l'array persone02
console.log(persone02)

/*
NOTA: Questo sistema non funzione perchè il ciclo aggiunge la proprietà info all'oggetto originale, 
quindi stampando persona01 si ottiene lo stesso risultato che stampando persona02.
Anche creando una nuova variabile newObj ed assegnandole persone01[i] il risultato sarebbe lo stesso, perchè il riferimento sarebbe sempre lo stesso oggetto.
la soluzione ottimale sarebbe creare un nuovo oggetto 'newObj' ed utilizzare il metodo spread per copiare le proprietà dell'oggetto iterato

newObj = {
    ...persone01[i]
}

a questo punto si può aggiungere info a newObj, quindi pusharlo nell'array persone02
*/