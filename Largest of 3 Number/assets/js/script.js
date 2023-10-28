function onHandling(f){
    f.preventDefault(); // to avoid page refresh

    let x = document.form1.inp1.value ;
    let y = document.getElementById('inp2').value;
    let z = document.getElementById('inp3').value;

    if(x>y && x>z ){
        document.getElementById("result1").innerHTML = (`Largest Number x = ${x}`)
    }else if(y>x && y>z){
        document.getElementById("result1").innerHTML = (`Largest Number y = ${y}`);
    }else if(z>y && z>x){
        document.getElementById('result1').innerHTML = (`Largest Number z = ${z}`);
    }else{
        document.getElementById('result1').innerHTML = ('All are equal');
    }
}