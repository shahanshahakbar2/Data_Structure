function onHandling(e){
    e.preventDefault();

let val = document.getElementById("inp1").value;
let char = val.charCodeAt();

if(char>=65 && char<=90){
    // or if(c>='A' && c<='Z')
    result = "This is a Capital Alphabet";

}
else if(char>=97 && char<=122){
    // or if (c>='a' && c<='z')
    result = "This is a Small Alphabet";
}
else if(char>=48 && char<=57){
    // or if (c>='0' && c<='9')
    result = "This is a Digit";
}
else {
    result = "This is a Special character";
}
document.getElementById('result1').innerHTML = result;
}
