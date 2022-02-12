module.exports =function sum(number1=0, number2=0) {
    if(typeof(number1)!="number" || typeof(number2)!="number"){
        return "Invalid Input!"
    }
    if(number1>32767 ||number1 < -32768 || number1>32767 ||number1 < -32768){
        return "Inputs are out of range"
    }
    return number1 + number2;
  }
