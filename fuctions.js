// JavaScript funksiyalari bilan ishlash
var age = 22;
function identify(age) {
  if (age < 10) alert ("You are child");
  else if (age < 16) alert ("You are teenager");
  else if (age < 21) alert ("You are still young");
  else alert ("you are already an adult");
}

// learn.javascript.ru saytidagi fuksiya darsining vazifalari
// Masala #1:
function checkAge (age) {
	return (age >) || confirm ("Kattalar ruxsat berishdimi?")
}
function checkAge (age) {
  return (age > 18 ) ?  true : confirm ("Kattalar ruxsat berishdimi?");

// Masala #2:
function min(a, b) {
  if (a > b) return b;
  else return a;
}

// Masala #3:
function pow(x, n) {
  var y = x;
  for (var i = 1; i < n; i++) { y *= x; }
  return y;
}
