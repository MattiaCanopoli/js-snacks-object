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

/*SOLUZIONE PIÙ LUNGA
1.assegno alla variabile mammiferi il metodo filter dell'array animali
2. verifico che la condizione sia vera, ovvero che la propietà classe dell'oggetto iterato sia 'mammiferi'
3. se vero, ritorno l'oggetto iterato, che verrà aggiunto all'array mammiferi
*/

/*
const mammiferi = animali.filter(function (animale) {
    if (animale.classe === 'mammiferi') {
        return animale
    }
})
*/

/*SOLUZIUONE BREVE
1.assegno alla variabile mammiferi il metodo filter dell'array animali
2.ritorno l'oggetto se vero (il codice potrebbe essere letto come return true,
quindi se la classa di animale è diversa da 'mammiferi', è false e passa all'iterazione successiva)
*/

const mammiferi = animali.filter(function (animale) {

    return animale.classe === 'mammiferi'
})

//stampo in console il nuovo array
console.log(mammiferi)