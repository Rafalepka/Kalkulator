'use strict';


function inputClick(value) {
    var viewValue = document.getElementById('view').value;

    if (value != 'AC' && value != '=' && value != '.') { // sprawdzenie znakow, ktore sa rozne od AC . i = 
        document.getElementById('view').value += value; // w poluu wprowadzania dodaje kolejne liczby i znaki dzialania
    } else if (value == 'AC') {
        document.getElementById('view').value = '';
    } else if (value == '.') {
        if (viewValue.slice(-1) != ".") { // sprawdza czy ostatni elelement jest rozny od kropki
            document.getElementById('view').value += value;
        }
    } else { //jesli klikniemy przycisk
        if (isNaN(viewValue.slice(-1)) || viewValue.indexOf('/0') > -1) { //kiedy jest liczba lub kiedy w ciagu znakow jest /0
            document.getElementById('view').value = 'Error'; // wyswietl error
        } else

        {
            document.getElementById('view').value = eval(viewValue); // wylicza wynik dzialania i wyswietla w polu wynik
        }
    }
}


//    var result = eval(viewValue);