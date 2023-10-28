function onCheck(e){
    e.preventDefault();
    var val = document.getElementById("inp1").value;
    
    if(val%2 == 0){
        res = `${val} is even Number`;
    }else {
        res = `${val} is odd Number`;
    }
    document.getElementById('res').value= res ;
}