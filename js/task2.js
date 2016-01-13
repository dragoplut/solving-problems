/**
 * Created by oleksandr on 05.01.16.
 */
function inputValue(){
    var someString = document.getElementById('calcInput').value;
    var result = processingBrackets(someString);
    console.log(result);
    alert(result);
}

/**
 * Calculates input array, allowed:  *0123456789.+-/  returns: "result"
 * @param someArray
 * @returns {*}
 */
function calculateNewArray(someArray){
    var numberForCount = '';
    var stringArr = someArray;
    while (stringArr.length > 1){
        if (stringArr.indexOf('*') > 0 || stringArr.indexOf('/') > 0){
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
    return(stringArr[0]);
}

/**
 * Convert string to math split array, allowed: *0123456789()+-/
 * @param someString
 * @returns {Array}
 */
function stringToArr(someString){
    var inputString = someString;
    var k = 0;
    var stringArr = [];
    for (var i = 0; i < inputString.length; i++){
        if (inputString[i] === '+' || inputString[i] === '-' || inputString[i] === '*' || inputString[i] === '/') {
            if (inputString[i-1] === ')'){
                stringArr[k] = inputString[i];
                k += 1;
            } else if (inputString[i+1] === '('){
                k += 1;
                stringArr[k] = inputString[i];
            } else {
            k += 1;
            stringArr[k] = inputString[i];
            k += 1;
            }
        }
        else if (inputString[i] === '(' || inputString[i] === ')'){
            if (inputString[i] === '(' && inputString[i-1] === undefined || inputString[i] === '(' && inputString[i-1] === '(' || inputString[i] === ')' && inputString[i-1] === ')'){
                stringArr[k] = inputString[i];
                k += 1;
            } else if (inputString[i-1] != undefined){
                k += 1;
                stringArr[k] = inputString[i];
                k += 1;
            }
        }
        else {
            if (stringArr[k] === undefined){
                stringArr[k] = '';
            }
            stringArr[k] += inputString[i];
        }
    }
    return(stringArr);
}

/**
 * Calculates input string "with brackets", returns: result.
 * Warning!!! Needed functions: stringToArr(someString) && calculateNewArray(someArray)
 * @param someString
 * @returns {string}
 */
function processingBrackets (someString){
    var inputArr = stringToArr(someString);
    var stringArr = [];
    var firstCloseBracket = inputArr.indexOf(')');
    var result = '';
    while (inputArr.length > 1){
        if (inputArr.indexOf(')') && inputArr.indexOf(')') != -1){
            for (var i = (firstCloseBracket-1); i > -1; i--){
                if (inputArr[i] === '('){
                    stringArr = [];
                    stringArr = inputArr.slice(i + 1, firstCloseBracket);
                    inputArr.splice(i, firstCloseBracket-i+1, calculateNewArray(stringArr));
                    firstCloseBracket = inputArr.indexOf(')');
                    if (inputArr.indexOf(')') == -1){
                        i = -1;
                    }
                }
            }
        } else if (inputArr.length > 1){
            result = calculateNewArray(inputArr);
        } else {
            result = inputArr;
        }
    }
    return (result);
}