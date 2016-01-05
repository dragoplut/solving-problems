/**
 * Created by oleksandr on 05.01.16.
 */
function calculation(){
    var inputString = document.getElementById('calcInput').value;
    var k = 0;
    var numberForCount = '';
    var result = '';
    var stringArr = [];
    for (var i = 0; i < inputString.length; i++){
        if (inputString[i] === '+' || inputString[i] === '-' || inputString[i] === '*' || inputString[i] === '/') {
            k += 1;
            stringArr[k] = inputString[i];
            k += 1;
        }
        else if (inputString[i] === undefined){
            alert('Введено некоректні дані!');
            return;
        }
        else {
            if (stringArr[k] === undefined){
                stringArr[k] = '';
            }
            stringArr[k] += inputString[i];
        }
    }

    if (stringArr.indexOf('*')){
        for (var j = 0; j < stringArr.length; j++){
            numberForCount = Number(numberForCount)+((Number(stringArr[stringArr.indexOf('*')-1])*Number(stringArr[stringArr.indexOf('*')+1])));
            stringArr[stringArr.indexOf('*')-1] = '';
            stringArr[stringArr.indexOf('*')+1] = '';
            stringArr[stringArr.indexOf('*')] = '';
            if (stringArr.indexOf('*') < 1){
                j=stringArr.length;
            }
        }
    }

    alert(inputString + '<--input ' + stringArr + '<--parse ' + numberForCount + '');
}




function tempFunc(){
    var inputString = document.getElementById('calcInput').value;
    var result = 0;
    var numberForCount = '';
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === '+') {
            result += Number(numberForCount);
            numberForCount = '+';
        }
        else if (inputString[i] === '-'){
            result += Number(numberForCount);
            numberForCount = '-';
        }
        else {
            numberForCount += inputString[i];
        }
    }
    result += Number(numberForCount);
    alert(inputString + ' = ' + result);


    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === '+') {
            result += Number(numberForCount);
            numberForCount = '+';
        }
        else if (inputString[i] === '-'){
            result += Number(numberForCount);
            numberForCount = '-';
        }
        else {
            numberForCount += inputString[i];
        }
    }
    result += Number(numberForCount);
}