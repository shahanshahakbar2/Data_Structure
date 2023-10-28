function daysInMonth(e){
    e.preventDefault();
    let year = Number(document.getElementById('year').value);
    let month = document.getElementById('month').value;
    let number = month.toLowerCase();

    if(year == " "){
        res = "Enter Year";
    }
    else{
        if(year%4 == 0){
            if(number == 'january' || number == 'march' || number == 'may' || number == 'july' || number == 'august' || number == 'october' || number == 'december'){
                res = "31 days";
            }
            else if(number == 'febuary'){
                res = '29 days';

            }
            else{
                res = '30 days';
            }
            
        }
        else {
            if(number == 'january' || number == 'march'|| number == 'may' || number == 'july'|| number == 'august'  || number == 'october' || number == 'december'){

                res = '31 days';

            }
            else if(number == 'febuary'){
                res = '28 days';

            }
            else{
                res = '30 days';
            }
        }
        document.getElementById('result1').innerHTML = res;
    }
    
}
        