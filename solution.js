
// //Frage 1
// var isDog=true;
// console.log(isDog? "pat, pat":"Finde einen Hund zum Streicheln");

// //Frage 2
// var speedLimit =50; 
// yourSpeed =55;
// console.log(yourSpeed>speedLimit?"Du fährst zu schnell":"Du fährst unter dem Tempolimit, Oma");

// //Frage 3
//  var age =15;
//  console.log(age>16 ?"serviere Bier":"serviere Butterbier");

//  //Frage 4
//  var isStudent =true;
//  console.log(isStudent?"Das Ticket kostet 5,00 €":"Das Ticket kostet 12,00 €");

//  //Frage 5
//  var okMarie ="kuchen";
//  console.log(okMarie==="kuchen"?"Lass sie Kuchen essen":"Oh, Mist");


//  //Frage 6
//  const zahl1=30;
//  const antwort30= zahl1 % 2===0 ? `${zahl1} ist gerade`:`${zahl1} ist ungerade`;
//  console.log(antwort30);

//  const zahl2=939;
//  const antwort939= zahl2 % 2===0 ? `${zahl2} ist gerade`:`${zahl2} ist ungerade`;
//  console.log(antwort939);

//  const zahl3=409;
//  const antwort409= zahl2 % 2===0 ? `${zahl3} ist gerade`:`${zahl3} ist ungerade`;
//  console.log(antwort409);

 





// Password das der Nutzer eingegeben hat
// Zum Testen verändern
let password = "testtttt";
// State Variablen
let isPasswordSafe = true;


let errorMessages = [];

// Länge check -> Passwort muss mindestens 6 Buchstaben lang sein
if (password.length < 6) {
   isPasswordSafe = false;
   errorMessages.push("Password nicht lang genug");
}

// // Sonderzeichen check -> Passwort muss mindestens ein Sonderzeichen enthalten
if(
   !password.includes("!") & 
   !password.includes("$") & 
   !password.includes("%") &
   !password.includes("&") & 
   !password.includes("+") & 
   !password.includes("#")
) {
   isPasswordSafe = false;
   errorMessages.push("Passwort muss Sonderzeichen enthalten");

}
// // Bekannte Worte check -> Passwort darf keine bekannten Worte enthalten


if (password.indexOf("password") >=0 || password.indexOf("123456") >= 0) {
   isPasswordSafe = false;
   errorMessages.push("Passwort darf keine leichten Worte enthalten");
}


// // Zum Schluss gibt das Programm aus ob das Passwort sicher ist
console.log("Überprüfung abgeschlossen.");
console.log(
   isPasswordSafe ? "Passwort ist sicher.": "Passwort ist nicht sicher!"
);

if (isPasswordSafe) {
   console.log("Anmeldung kann fortfahren.");
} else{
   console.log("Es gab folgende Fehler:");
   console.log(errorMessages.join(" | "));
}

// Du erschließt dir aus Fantasias Kommentaren die wahre Aufgabe des Codes und findest heraus was er tun soll. Anschließend korrigierst du Fantasias Code (Das nennt man auch refactoring) und kommentierst in jeder Zeile welche Fehler sie gemacht hat (Das nennt man code review).
// Wenn alle Fehler beseitigt sind kannst du Fantasia auch noch Tipps für “besseren” Code geben.