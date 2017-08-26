function ligEllerUlig(value) {
    value = Math.floor(value);
    if (value < 0) {
        value = -value;
        return value % 2;
    }
}
console.log(ligEllerUlig(-1));