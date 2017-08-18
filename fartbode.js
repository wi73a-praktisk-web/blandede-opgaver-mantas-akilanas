var array = [[51, 59, 1000, "ingen"], [60, 64, 1500, "ingen"], [65, 65, 2500, "ingen"], [66, 69, 2500, "Klip i kørekort"], [70, 79, 3000, "Klip i kørekort"], [80, 80, 3500, "Klip i kørekort"], [81, 84, 3500, "Betinget frakendelse"], [85, 89, 4000, "Betinget frakendelse"], [90, 94, 4500, "Betinget frakendelse"], [95, 99, 5500, "Betinget frakendelse"], [100, 100, 6000, "Betinget frakendelse"], [101, 500, 6000, "Ubetinget frakendelse"]];
var x = 0;
var strafe = -1;
function comparing(allowed, speed, work) {
    array.forEach(function(element,index) {
        if(element[0] <= speed && element[1] >= speed ){
            strafe = index;
        }
    });
    if (array[strafe][3] == "ingen") {
        if (work == "nej")
            return "bøde er " + array[strafe][2] + "kr du kørte " + speed + "km/t";
        else {
            return "bøde er " + array[strafe][2] * 2 + "kr du kørte " + speed + "km/t";
        }
    }
    else{
        if (work == "nej")
            return "bøde er " + array[strafe][2] + "kr du kørte " + speed + "km/t og " + array[strafe][3];
        else {
            return "bøde er " + array[strafe][2] * 2 + "kr du kørte " + speed + "km/t og " + array[strafe][3];
        }
    }
console.log(comparing(50, 90, "ja"));