function func(value){
//     value = value.toLocaleString(
//         undefined, // use a string like 'en-US' to override browser locale
//         { minimumFractionDigits: 2 }
//       );
//     console.log("kr. " + value);
var result = "";
var rest;
if (value > 1000){
    result += Math.floor(value / 1000);
    result += ".";
    // result += value % 1000;
    rest = value % 1000;
    if (rest < 10){
        result += "00" + rest;
    }
    else if (rest < 100){
        result += "0" + rest;
    }
    else{
        result += rest;
    }
    result += ",00";
}
    return "kr. " + result;
}
console.log(func(5100));