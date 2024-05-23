'use strict'

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

const mammiferi = []

for (let i = 0; i < animali.length; i++) {
    const classeAnimale = animali[i].classe

    if (classeAnimale === 'mammiferi') {
        mammiferi.push(animali[i])
    }
}

console.log(mammiferi)