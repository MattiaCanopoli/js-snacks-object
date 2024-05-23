'use strict'

//definisco un array di oggetti 'animali'
const animali = [
    {
        nome: 'animale1',
        famiglia: 'famiglia1',
        classe: 'mammiferi'
    },
    {
        nome: 'animale2',
        famiglia: 'famiglia2',
        classe: 'ovipari'
    },
    {
        nome: 'animale3',
        famiglia: 'famiglia3',
        classe: 'ovovivipari'
    },
    {
        nome: 'animale4',
        famiglia: 'famiglia1',
        classe: 'mammiferi'
    },
    {
        nome: 'animale5',
        famiglia: 'famiglia2',
        classe: 'mammiferi'
    },
    {
        nome: 'animale6',
        famiglia: 'famiglia3',
        classe: 'ovovivipari'
    }
]

//definisco una variabile 'mammiferi' che contine un array vuoto
const mammiferi = []


/*CICLO FOR EACH
1.ad ogni iterazione, quindi per tutta la lunhezza dell'array, verifico che la proprietà classe dell'oggetto sia 'mammiferi'
2.se la condizione è verificata, pusho l'oggetto nell'array 'mammiferi'
*/
animali.forEach(function (animale) {
    if (animale.classe === 'mammiferi') {
        mammiferi.push(animale)
    }
})

//stampo in console l'array 'mammiferi'
console.log(mammiferi)

// NOTA: il metodo forEach, a differenza di map e filter, non ritorna nulla. È quindi necessario creare prima un array da riempire