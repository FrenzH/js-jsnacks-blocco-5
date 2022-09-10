/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/

/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */

/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */



//SNACK1

const teamsArray =[
    {name : 'Chealsea',
     pointsMade : 0 ,
     foulsDrawn : 0
    },
    {name : 'Liverpool',
     pointsMade : 0 ,
     foulsDrawn : 0
    },
    {name : 'Manchester-city',
     pointsMade : 0 ,
     foulsDrawn : 0
    },
    {name : 'Manchester-united',
     pointsMade : 0 ,
     foulsDrawn : 0
    },
    {name : 'Arsenal',
     pointsMade : 0 ,
     foulsDrawn : 0
    }
];

function getRandomScores(min,max){
    teamsArray.forEach((element) => {
        let points = Math.floor(Math.random() * (max - min + 1) ) + min;
        let fouls = Math.floor(Math.random() * (max - min + 1) ) + min;
        element.pointsMade=points;
        element.foulsDrawn=fouls;


    });
}

getRandomScores(1,50);
console.log(teamsArray)

