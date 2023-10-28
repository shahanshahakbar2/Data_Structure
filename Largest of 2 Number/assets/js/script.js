function onHandling(f){
    f.preventDefault(); // to avoid page refresh

    let x = document.form1.inp1.value ;
    let y = document.getElementById('inp2').value;

    if(x>y){
        document.getElementById("result1").innerHTML = (`Largest Number x = ${x}`)
    }else if(y>x){
        document.getElementById("result1").innerHTML = (`Largest Number y = ${y}`);
    }else{
        document.getElementById('result1').innerHTML = (`Both are Equal`);
    }
}