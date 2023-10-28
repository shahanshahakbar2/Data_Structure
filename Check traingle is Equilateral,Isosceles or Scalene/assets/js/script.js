function onCheck(e){
    e.preventDefault();
    var s1 = document.getElementById("inp1").value;
    var s2 = document.getElementById("inp2").value;
    var s3 = document.getElementById("inp3").value;
    

    if(s1 == s2 && s1 == s3){
        res = ` Equilateral triangle`;
    }else if(s1 == s2 || s2 == s3 || s3 == s1) {
        res = ` Isoceles triangle`;
    }else{
        res = ` Scalene triangle`;
    }
    document.getElementById('res').value= res ;
}