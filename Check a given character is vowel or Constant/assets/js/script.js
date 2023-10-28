function onCheck(e){
    e.preventDefault();
    let val = document.getElementById("inp1").value;
    val = val.toLocaleLowerCase();
    
    if(val == "a" || val == "e" || val == "i" || val == "o" || val == "u"){
        res = `is a Vowel`;
    }else {
        res = ` is a Constant`;
    }
    document.getElementById('res').value= res ;
}