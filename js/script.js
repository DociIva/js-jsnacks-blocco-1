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
