// switch operatorining qo'llanilishi

// learn.javascript.ru saytidagi masalalar:
// Masala #1:

if (browser == 'IE') alert ('Hali ham IE ishlatasizmi?')
else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') 
  alert ('Bizning sayt bu brauzerlarda to'g'ri ko'rinadi')
else alert ('O\'ylaymizki, sining brauzarda sayt to'g'ri ko'rinyapti');

// Masala #2

var a = prompt('a?', '');
switch(a) {
  case 0 : alert(0); break;
  case 1 : alert(1); break;
  case 2 :
  case 3 : alert('2,3'); break;
  default : break;
}
