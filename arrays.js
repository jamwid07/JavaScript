// learn.javascript.ru saytidagi massivlar mavzusiga bag'ishlangan darsning masalalar yechimi

//1-masala javobi:
alert(goods[goods.length-1]);

//2-masala javobi:
goods.push("kompyuter");

//3-masala javobi:
var styles = ["Jaz", "Blues"];
styles.push("Rock-n-Roll");
styles[styles.length-2] = "Classic";
alert(styles.shift());
styles.unshift("Rap", "Reggy");

//4-masala javobi:
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var max = arr.length-1;
var rand = Math.floor(Math.random() * (max + 1));
alert (arr[rand]);

//5-masala javobi:
while (true) {
	var elem = prompt("raqamni kiriting", 0);
	if (elem == "" || elem === null || isNaN(elem)) break;
	var arr.push(elem);
}
var sum = 0;
for (var i = 0; i < arr.length; i++)
	sum += arr[i];
alert (sum);

//5-masala shunchaki savol bo'lgani uchun kommentariyda javob yozaman
//keltirilgan kod ishga tushsa 1-alert 1, 2-alert esa 5 ni chiqaradi
//chunki 2-massiv 1-massivni o'zlashtirib, 0-elementga 5 raqamini kirityapti

//6-masala javobi:
function find(arr[], value) {
	for (var i = 0; i < arr.length; i++)
		if (arr[i] == value) 
			return i;
	return -1;
}

//7-masala javobi:
function filterRange(arr, a, b) {
	for (var i = a; i <= b; i++)
		var filter.push(arr[i]);
	return filter;
}

//8-masala javobi:
function resheto(n) {
	for (var i = 2; i < n; i++)
		var arr.push(i);

	for (i = 0; i < arr.length; i++) {
	var p = arr[i];
	if (p*p < n)
		for (var i = 2; i < arr.length; i++)
			arr[i*p] = 0;
	}
	var sum = 0;
	for (i=0;i<n;i++)
		sum += arr[i];
	return sum;
}