// 1. Create a function that prints out armstrong numbers till a given integer N
// E.g armstrong - 153 = 1*1*1 + 5*5*5 + 3*3*3
function orderOfDigit(_number) {
    let digitCount = 0;
    if (_number === undefined) {
        return "Enter the value"
    }
    if (typeof (_number) !== "number"|| _number%1!=0) {
        return "Invalid DataType"
    }
    while (_number != 0) {
        digitCount++;
        _number = parseInt(_number / 10, 10);
    }
    return digitCount;
}

function isArmstrongNum(_number) {

    if (typeof (_number) !== 'number' || _number % 1 != 0) {
        return "Invalid datatype"
    }

    if (_number < 0)
        return "Negative value not allowed";

    if (_number > 32767 || _number < -32768 || _number > 32767 || _number < -32768) {
        return "Inputs are out of range"
    }

    y = orderOfDigit(_number);
    let temp = _number, sum = 0;
    while (temp != 0) {
        let r = temp % 10;
        sum = sum + Math.pow(r, y);
        temp = parseInt(temp / 10, 10);
    }
    return sum === _number;
}

function ArmstrongGenerator(range) {
    // array to store the armstrong number in the given range
    let armstrongNumbers=[];
    for (let index = 0; index <= range; index++) {
        if (isArmstrongNum(index)) {
            armstrongNumbers.push(index);
            // console.log('Its a armstrong number');
        }
    }
    return armstrongNumbers
}

module.exports = {
    orderOfDigit: orderOfDigit,
    isArmstrongNum: isArmstrongNum,
    ArmstrongGenerator: ArmstrongGenerator
}