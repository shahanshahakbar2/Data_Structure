function onHandling(r){
    r.preventDefault();

    let Value1 = document.getElementById('inp1').value;
    let x = Value1.split("").reverse().join("");
    let y = Value1;

    if(x == y){
        document.getElementById('result1').innerHTML = (`This is a Palindrome Number `);

    }else{
        document.getElementById('result1').innerHTML = (`This is Not a Palindrome Number`);
    }


}
