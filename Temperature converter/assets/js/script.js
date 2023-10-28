function onTemperature(p) {
    p.preventDefault();
    const fv = document.getElementById('inp1').value;

    // T('C) =(T('F) - 32) * 5/9   This is the formula to convert fahrenheit to celsius temperature value

    let cel = (fv - 32) * 5/9 ;
    
    // console.log(cel);

    document.getElementById('result1').value  =  cel+"\xB0C" ;

    
}
function onCelsius(a) {
    a.preventDefault();
    const cv = document.getElementById('inp2').value;

    let fah = cv * (9 / 5) + 32;

    document.getElementById('result2').value = fah +"\xB0F";
    
}