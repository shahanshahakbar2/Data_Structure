function anglesTriangle(e){
    e.preventDefault();
    let a= document.getElementById('angle1').value;
    let b = document.getElementById('angle2').value;
    let c = document.getElementById('angle3').value;

    if(a + b + c == 180 && a != 0 && b != 0 && c != 0){
        
        res = 'valid Triangle';
        console.log('valid');

    }
    else{
        
        res = 'In_Valid Triangle';
        console.log('in_valid');
    }
    document.getElementById('result1').innerHTML = res;
}