for(let i =1; i<=5; i++){
    let num = '';
    for(let j=1; j<=i; j++){
        num += j + '*';
    }
    document.write(`${num} <br>`);
}