function func() {
    for (var i = 1; i <= 137; i++) {
        var str = "";
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Plum Bus");
        }
        else if (i % 3 == 0) {
            console.log("Plum");
        }
        else if (i % 5 == 0) {
            console.log("Bus");
        }

        else
            console.log(i);
    }
}
func();