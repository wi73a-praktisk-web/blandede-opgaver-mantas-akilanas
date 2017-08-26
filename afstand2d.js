function afstand2d(x1,y1,x2,y2){
    var xdistance = Math.abs(x1-x2);
    var ydistance = Math.abs(y1-y2);
    ydistance *= ydistance;
    xdistance *= xdistance;

    return Math.sqrt(xdistance + ydistance);

}
console.log(afstand2d(1,1,2,2));