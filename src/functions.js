const getSymbol = (text, index) =>{
    const res = text[index];
    if (res === undefined){
        return '';
    }
    return res;
}
 
const removeDigit = (number) =>{
    let index = '';
    index += number.toString()[0];
    index += number.toString()[2];
    return parseInt(index);
}

const isSquare = (num1, num2) =>{
    if(num1 > num2){
        num2 = num2**2;
        return num1 === num2;
    }
    if(num1 < num2){
        num1 = num1**2;
        return num1 === num2;
    } else {
        return false;
    }
}

const numberLength = (numb) => numb.toString().length;

const flipOver = (text) =>{
    return text.split('').reverse().join('');
}

export {getSymbol, removeDigit, isSquare, numberLength, flipOver}                           