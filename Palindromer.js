function func(str){
    str = str.replace(/\s+/g, '');
    var str2 = str.split("").reverse().join("");
    if (str == str2){
        return true;
    }
    else {
        return false ;
    }
}
console.log(func("regninger"))