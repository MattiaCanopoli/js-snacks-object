'use strict'

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


console.log(persone02)
console.log(persone01)