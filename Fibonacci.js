function func() {
    var value = 0.1;
    var x = 0.1;
    console.log(value.toFixed(1));
    value = value + x;
    console.log(value.toFixed(1));
    while (value < 1600) {
        value = value + x;
        x = value - x;
        if (value < 1600) {
            console.log(value.toFixed(1));
        }
    }
}
func();