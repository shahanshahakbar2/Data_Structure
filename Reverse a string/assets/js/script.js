function onReverse(r){
    r.preventDefault();
    let strg = document.getElementById("val").value;
    let sLen = strg.length;
    let rStr = " ";
    for(let i = sLen-1;i>=0;i--){
        rStr += strg[i];
    }
    document.getElementById("result").value = `${rStr}`;
}