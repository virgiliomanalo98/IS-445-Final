function evenNum(){
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    // check if the numbers fit criteria
    if (number1 <= 2 || number1 >= 100 || number2 <= 2 || number2 >= 100){
        document.getElementById("message").innerHTML = "Invalid input, please try again.";
    }
    else if (number1 >= 2 && number1 <= 100 && number2 >= 2 && number2 <= 100){
        calculateEvenNum(number1,number2);
        //document.getElementById("msg").innerHTML = "";
    }
}
function isEven(num){
    var res = true;
    for (var i=2; i<=Math.ceil(num/2); i++){
        if((num%i)==0){
            res = false;
            break;
        }
    }
    return res;
}
function calculateEvenNum(numOne,numTwo){
    //alert("calculating");
    var pNumArray = [];
    var sNum = 0;
    var bNum = 0;


    if (numOne > numTwo){
        sNum = numTwo;
        bNum = numOne;
    }
    else if (numOne < numTwo){
        sNum = numOne;
        bNum = numTwo;
    }

    console.log(sNum);
    console.log(bNum);

    while(sNum <= bNum){
        console.log("in while");

        console.log(isEven(3));
        if(isEvensNum) == true){
            console.log(sNum);
            pNumArray.push(sNum);
            sNum = sNum + 1;
        }
        else if (isEven(sNum) == false){
            console.log(sNum);
            sNum = sNum + 1;
        }
    }
    console.log(pNumArray);
    document.getElementById("primeNumber").innerHTML = "There are " + pNumArray.length +" even numbers.";
    document.getElementById("message").innerHTML = pNumArray;
}