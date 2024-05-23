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

const persone02 = []

for (let i = 0; i < persone01.length; i++) {
    let patente = `${persone01[i].nome} ${persone01[i].cognome} può guidare`

    if (persone01[i].eta < 18) {
        patente = `${persone01[i].nome} ${persone01[i].cognome} non può guidare`
    }

    persone01[i].info = patente

    persone02.push(persone01[i])

}

console.log(persone02)