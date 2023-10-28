function onCheck(e){
    e.preventDefault();
    var val = document.getElementById("inp1").value;
    var res = Math.sign(val);
    /* if(val > 0){
        res = `${val} is positive`;
    }else if(val < 0){
        res = `${val} is negative`;
    }else{
        res = `${val} is qual to zero`;
    } */
    document.getElementById('res').value= res ;
}