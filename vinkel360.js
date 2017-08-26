function vinkel360(vinkel){
    if (vinkel < 0){
        vinkel %= 360;
        vinkel = 360 + vinkel;
        return vinkel;
    }
    else{
    return vinkel % 360;
    }
}
console.log(vinkel360(-10));