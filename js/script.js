//console.log('ciao belli');
//Snack 1
//Il software deve chiedere per 5 volte all’utente di inserire 
//un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, 
//con il for e con il while

// prima con il FOR
// chiedi all'utente di inserire un numero 5 volte
var contatore = 5;
// somma
var somma = 0;

// è la variabili contenitore dei numeri inseriti 
// FOR 
for( var i = 0 ; i < contatore; i++) {
    var numeri = parseInt(prompt('Inserisci numero' + i + 'di' + contatore));
       console.log(numeri);
       somma += numeri;

}
// per stamapre la somma di tutti i numeri inseriti dagli utenti
console.log('Totale della somma dei numeri', somma);

// seconda con WHILE

//chiedi all'utente 