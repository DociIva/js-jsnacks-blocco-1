//console.log('ciao belli');
//Snack 1
//Il software deve chiedere per 5 volte all’utente di inserire 
//un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, 
//con il for e con il while

// prima con il FOR
// chiedi all'utente di inserire un numero 5 volte
var contenuto = 5;
// somma
var somma = 0;
/*                                                         commento
// è la variabili contenitore dei numeri inseriti 
// FOR 
for( var i = 0 ; i < contenuto; i++) {
    var numeri = parseInt(prompt('Inserisci numero' + i + 'di' + contenuto));
       console.log(numeri);
       somma += numeri;

}
// per stamapre la somma di tutti i numeri inseriti dagli utenti
console.log('Totale della somma dei numeri', somma);
*/
// seconda con WHILE
/*
var contatore = 1;
// WHILE 
while( contatore <= contenuto ) {
    var numero = parseInt(prompt ('Inserisci numero' + contatore + 'di' + contenuto));
    // prima la somma
    somma += numero;
    // contantore dell'incremento
    contatore++;
} 
console.log('Totale della somma dei numeri', somma);
*/

//Snack 2

//Inserisci un numero, se è pari stampa il numero, 
//se è dispari stampa il numero successivo

/*
// inserisci un numero
var numero = parseInt(prompt('Inserisci un numero '));

// if così per vedere se è pari
// if(numero % 2 === 0) 

// per avere il lavore dispari con 'diverso da 0' ( % 2 !== 0)
if( numero % 2 === 0) {
    console.log(numero);
} else {
     // + 1 così da l'incremento
     console.log(numero + 1);
}
*/

//Snack 3
//Generatore di “nomi cognomi” casuali:
//prendendo una lista di nomi e una lista di cognomi,
//Gatsby vuole generare una falsa lista di 3 invitati.

// Generazione delle due liste con due array
var nomi = ['Pino', 'Pippo', 'Marco', 'Liugi'];
console.log(nomi);

var cognomi = ['Viola', 'Verdi', 'Rossi', 'Giallo'];
console.log(cognomi);

// lista vuota da dover riempire dopo con tutte e due
var listaPiena = [];
// qua con For
for(var i = 0; i < 3; i++) {
// genera un indice della lista dei nomi, random per per poter avere il numero

    var randomNomiIndice = Math.floor(Math.random() * nomi.length);
    console.log(randomNomiIndice); 
    var randomCognomiIndice = Math.floor(Math.random() * cognomi.length);
    console.log(randomCognomiIndice);

 // generazione della var con la lista nuova con sia i nomi che i cognomi con il numero accostato
    var newListaPiena = nomi[randomNomiIndice] + " " + cognomi[randomCognomiIndice];
    listaPiena.push(newListaPiena);
}
console.log(newListaPiena);
