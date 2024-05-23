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

const mammiferi = animali.filter(function (animale) {
    if (animale.classe === 'mammiferi') {
        return animale
    }
})



console.log(mammiferi)