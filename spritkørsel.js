function func(gang, promille) {
    var tekst = "";
    if (gang == 1) {

        if (promille >= 0.51 && promille <= 1.2) {
            tekst += "Betinged frakendelse og kørelsesforbud hvis mindre end 3 år siden, du fik kørekort første gang.";
        }
        else if (promille > 1.2 && promille <= 2.0){
            tekst += "Ubetinget Frakendelse: Mindst 3 år.";
        }
        if (promille > 2.0){
            tekst += "Betinget fængsel i 20 dage.";
        }

        if (promille >= 0.50) {
            tekst += "Kørelsesforbud hvis mindre end 3 år siden, du fik kørekort første gang.";
        }
        else {
            tekst += "Ingen straf.";
        }
        if (promille >= 0.51 && promille <= 2.0){
            tekst += "Bøde = netto månedsløn x promille."
        }
        else if (promille > 2.0){
            tekst +="Bøde = Netto månedsløn."
        }
    }
    else if (gang == 2) {
        if (promille >= 0.5 && promille <= 1.2) {
            tekst += "Ubetinget frakendelse i 3 år.";
        }
        else if (promille > 1.2){
            tekst += "Ubetinget frakendelse i 5 år.";
        }
        if (promille > 0.5 && promille <= 1.2){
            tekst += "Betinget fængsel i mindst 10 dage. Hvis betinget fængsel første gang = ubetinget fængsel i mindst 20 dage.";
        }
        else if (promille > 2.0){
            tekst += "Betinget fængsel i 30 dage. Hvis betinget fængsel første gang = ubetinget fængsel i mindst 20 dage.";
        }
        if (promille >= 0.50) {
            tekst += "Kørselsforbud ophæves, når du har gennemført A/T kursus og bestået kontrollerende køreprøve. Derefter 3 års prøvetid. Hvis frakendelsesdom, får du ubetinget frakendelse.";
        }
        else {
            tekst += "Ingen straf.";
        }
        if (promille >= 0.51){
            tekst += "Bøde = Netto månedsløn."
        }
    }
    else if (gang == 3) {
        if (promille >= 0.51 && promille <= 1.2) {
            tekst += "Ubetinget frakendelse i 3 år.";
        }
        else if (promille > 1.2){
            tekst += "Ubetinget frakendelse i 10 år.";
        }
        if (promille > 0.5 && promille <= 1.2){
            tekst += "Ubetinget fængsel i mindst 20 dage.";
        }
        else if (promille > 2.0){
            tekst += "Ubetinget fængsel i mindst 40 dage.";
        }
        if (promille <= 0.50) {
            tekst += "Ingen straf.";
        }
        if (promille >= 0.51){
            tekst += "Bøde = Netto månedsløn."
        }
    }
    else if (gang == 4){
        if (promille > 0.50){
            tekst += "Ubetinget frakendelse i 10 år.";
        }
        if (promille >= 0.51 && promille <= 2.0){
            tekst += "Ubetinget fængsel i 30 dage.";
        }
        else if(promille > 2.0){
            tekst += "Ubetinget fængsel i 50 dage."
        }
        if (promille > 0.50){
            tekst += "Bøde fastsat af retten.";
        }
        else{
            tekst+= "ingen straff"
        }
    }
    console.log(tekst);
}
func(1, 1.20);
