function fjernMellemrumFoerOgEfter(str){
    str = str.split("");
    if(str[0] ==" " && str[str.length-1] == " "){
        str = str.join("");
        str = str.slice(1,str.length-1);
    }
    else if(str[0] ==" "){
        str = str.join("");
        str = str.slice(1,str.lenght);
    }
    else if(str[str.length-1] == " "){
        str = str.join("");
        str = str.slice(0,str.length-1);
    }
    return str;
}
console.log(fjernMellemrumFoerOgEfter(" hej "));