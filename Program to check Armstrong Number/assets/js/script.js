function onCheck(r){
    r.prevenDefault();
    var number = document.getElementById("inp1").value;
    var temp = number;
    var sum = 0;
    while(temp > 0){
        var digit = temp%10;
        sum += digit**3;
        temp = parseInt(temp/10);
    }
    if(sum == number){
        res = " is an Armstrong number";
    }else{
        res = " is not an Armstrong Number";
    }
    document.getElementById('res').value = res;
}