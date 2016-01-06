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

    while (stringArr.length > 1){
        if (stringArr.indexOf('*') && stringArr.indexOf('*') != -1 || stringArr.indexOf('/') && stringArr.indexOf('/') != -1){
            if (stringArr.indexOf('*') < stringArr.indexOf('/') && stringArr.indexOf('*') != -1 || stringArr.indexOf('/') == -1 || stringArr.indexOf('/') == false){
                for (var j = 0; j < stringArr.length; j++){
                    var tempIndex = Number(stringArr.indexOf('*'));
                    numberForCount = (stringArr[tempIndex-1])*(stringArr[tempIndex+1]);
                    stringArr.splice(tempIndex-1,3,numberForCount);
                    if (stringArr.indexOf('*') == -1 || stringArr.indexOf('/') < stringArr.indexOf('*') && stringArr.indexOf('/') != -1){
                        j=stringArr.length;
                    }
                }
            }
            else {
                for (var j = 0; j < stringArr.length; j++){
                    var tempIndex = Number(stringArr.indexOf('/'));
                    numberForCount = (stringArr[tempIndex-1])/(stringArr[tempIndex+1]);
                    stringArr.splice(tempIndex-1,3,numberForCount);
                    if (stringArr.indexOf('/') == -1 || stringArr.indexOf('*') < stringArr.indexOf('/') && stringArr.indexOf('*') != -1){
                        j=stringArr.length;
                    }
                }
            }
        }
        else if (stringArr.length > 1){
            for (var j = 0; j < stringArr.length; j++){
                numberForCount = Number(stringArr[0])+(Number(stringArr[1]+stringArr[2]));
                stringArr.splice(0,3,numberForCount);
                if (stringArr.length == 1){
                    j=stringArr.length;
                }
            }
        }
    }
    alert(inputString + '<--input ' + ', result--> = ' + stringArr[0]);
}