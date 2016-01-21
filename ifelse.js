// Shartli operatorlar bilan ishlash
// learn.javascript.ru saytidagi ifelse operatori masalalari yechimi

// Masala #1 alert operatori ishga tushadi, chunki har qanday bo'sh bo'lmagan satr true qiymat qabul qiladi

// Masala #2
answer = prompt ("javascriptning rasmiy nomi nima?", '');
if (answer === 'EcmaScript') alert ("javob to'g'ri")
else alert ("hali bilmaysizmi? U EcmaScript deyiladi");

//Masala #3:
take = prompt ("raqam kiriting", '');
if (take > 0) alert('1')
else if (take < 0) alert('-1')
else alert ('0');

// Masala #4
var user = prompt("Kimsiz?, '');

if (user == 'Admin') {
  var pass = prompt("Parolni kiriting", '');
  if (pass == "Hukmron) { alert("XUSH KELIBSIZ"); } 
  else if (pass == null) {
    alert("Kirish bekor qilindi");
  } else { alert("Parol noto'g'ri"); }
} else if (user == null) {
  alert("Kirish bekor qilindi");
} else {
  alert("Men sizni tanimayman);
}

// Masala #5
result = (a+b < 4 ) ? "kichik" : "katta";

// Masala#6
message = (login == "Jamshid") ? "Salom" : 
  (login == "Admin") ? "Assalomu alaykum" :
  (login == '') ? "login kiritilmagan" : '';
alert (message);
