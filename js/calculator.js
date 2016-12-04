'use strict';


function inputClick(value) {
    var viewValue = document.getElementById('view').value;

    if (value != 'AC' && value != '=' && value != '.') { // sprawdzenie znakow, ktore sa rozne od AC . i = 
        document.getElementById('view').value += value;
    } else if (value == 'AC') {
        document.getElementById('view').value = '';
    } else if (value == '.') {
        if (viewValue.slice(-1) != ".") {
            document.getElementById('view').value += value;
        }
    } else {
        if (isNaN(viewValue.slice(-1)) || viewValue.indexOf('/0')>-1){
            document.getElementById('view').value = 'Error';
        }
        
        else 
        
        {
            document.getElementById('view').value = eval(viewValue);
        }
    }
}


        //    var result = eval(viewValue);

