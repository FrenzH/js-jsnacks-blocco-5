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

/**************************************************************************/

//SNACK2

const array1 = [1,3,4,5,6,7,8,13,12,18];

function getArrayBetweenAandBRange(array,a,b){  //a<b
      let i ;
      const array2 = [];
      if(a===0)a++;
      for (i=a-1;i<b;i++){
        array2.push(array[i]);

      }
      return array2;
}

alert('enter two number : firts one must be less than second');
let num1;
let num2;

do{
    num1 = parseInt(prompt('Enter num1'));
    num2 = parseInt(prompt('Enter num2'));
}while(num1>num2 || isNaN(num1) || isNaN(num2));


const array2 = getArrayBetweenAandBRange(array1,num1,num2);
console.log(array2)

/**************************************************************************/

//SNACK3

const zucchina ={
    type : 'vegetables',
    length : 0,
    weigth : 0
}

const zucchineArray = [];

zucchineArray.push({...zucchina,length : 8, weigth : 5});
zucchineArray.push({...zucchina,length : 11, weigth : 6});
zucchineArray.push({...zucchina,length : 7, weigth : 4});
zucchineArray.push({...zucchina,length : 18, weigth : 8});
zucchineArray.push({...zucchina,length : 20, weigth : 9});
zucchineArray.push({...zucchina,length : 25, weigth : 10});
zucchineArray.push({...zucchina,length : 15, weigth : 7});
zucchineArray.push({...zucchina,length : 14, weigth : 7});
zucchineArray.push({...zucchina,length : 12, weigth : 6});
zucchineArray.push({...zucchina,length : 19, weigth : 8});


const zucchineMin15 =[];
const zucchineMag15 =[];

function lengthFilter (array , filterValue){
    array.forEach((element) => {
        if(element.length>filterValue)zucchineMag15.push(element);
        else if(element.length<filterValue)zucchineMin15.push(element);
    })
}

lengthFilter(zucchineArray,15);

let weigthZucchineMag15 = 0;

zucchineMag15.forEach((element) => {
     
    weigthZucchineMag15 += element.weigth;
})
console.log('zucchineMag15\' weigth ' ,weigthZucchineMag15);

let weigthZucchineMin15 = 0;

zucchineMin15.forEach((element) => {
    weigthZucchineMin15 += element.weigth;

})

console.log('zucchineMin15\' weigth :',weigthZucchineMin15)



