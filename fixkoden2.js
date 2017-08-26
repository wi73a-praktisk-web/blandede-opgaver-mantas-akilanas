// Disse oplysninger kommer selvfølgelig typisk fra en formular
var brugernavn = "";
var password = "";
var email = "";

var fejlbeskeder = [];

if (brugernavn == "") {
	fejlbeskeder.push("Du skal udfylde brugernavn feltet\n");
}

if (password == "") {
	fejlbeskeder.push("Du skal udfylde password feltet\n");
}

if (email == "") {
	fejlbeskeder.push("Du skal udfylde email feltet\n");
}

console.log (fejlbeskeder);