function onHandling(e){
    e.preventDefault(); 

    let x = document.getElementById('inp1').value;

    if(x % 4 == 0){
        document.getElementById('result1').innerHTML = (`<p> This is a Leap Year = ${x}  </p>`);
    }else{
        document.getElementById('result1').innerHTML = ('<p> This is not Leap Year </p>');
    }
}