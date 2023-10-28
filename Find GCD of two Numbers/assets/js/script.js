function Gcd(e){
    e.preventDefault();
    let x = document.getElementById('nmbr1').value;
    let y = document.getElementById('nmbr2').value;

    for(let z = 1; z<=x && z<=y; z++){
        if(x%z==0 && y%z==0){

            var h = z;

        }

    }
    document.getElementById('result1').innerHTML = h;

}
