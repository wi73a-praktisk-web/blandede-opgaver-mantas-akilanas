function rouletteArray(value, array){
    return array[value%3];
}
console.log(rouletteArray(1, ["rød", "grøn", "blå"]))