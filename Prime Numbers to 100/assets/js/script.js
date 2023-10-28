    // Display Prime Number between 2 to 100

    for(var i = 2; i<=100;i++){

        for(var j =2; j<i; j++){
            if(i%j == 0){
                break;

            }
        }
        if(i == j){
            document.write(j+"<br>");

        }
    }