function daysInMonth(e){
    e.preventDefault();

    let number = document.getElementById('inp1').value;
    // let number = nmbr.getDate();

    // var dateObj = new Date();
    // var month1 =['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    // var months = month1.getMonth();
    

    // number = months[dateObj.getMonth()]; //months from 1-12

    // var day = dateObj.getUTCDate() +9;
    // var year = dateObj.getUTCFullYear();

    // newDate = day + " " + month + " " + year;

    if(number == 1 || number == 3 || number == 5 || number == 7|| number == 8 || number == 10 || number == 12){
            
        res = '31 days';

    }else if (number == 4 || number == 6 || number == 9 || number == 11){

        res = '30 days';

    }else if(number == 2){
        res = '28 or 29 days';
    }else{
        res = 'Invalid Month, it should be under 12 Month';
    }
    document.getElementById('result1').innerHTML = res;
}

