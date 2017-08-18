function bmi(height,weight){
    height /= 100;
    height *= height;
    var bmiValue = weight/height;
    if (bmiValue <= 18.5){
        return "undervægtig";
    }
    else if(bmiValue <= 24.9){
        return "normalvægt"
    }
    else if(bmiValue <= 29.9){
        return "overvægtig"
    }
    else if(bmiValue <= 39.9){
        return "fedme"
    }
    else {
        return "svær fedme"
    }
}



console.log(bmi(170,50));
