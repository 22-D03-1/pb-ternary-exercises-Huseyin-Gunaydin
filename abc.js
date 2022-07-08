
const sifre = "1245!";

if(
   !sifre.includes("!") && 
   !sifre.includes("$") &&
   !sifre.includes("%") &&
   !sifre.includes("&") && 
   !sifre.includes("+") && 
   !sifre.includes("#")
){
    console.log("sifre güvenli");
}else{
    console.log("sifre güvenli degil.");
}