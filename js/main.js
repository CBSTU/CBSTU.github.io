function fact(x) {
	if (x == 1 || x == 0) return 1;
	return x * fact(x - 1);
	//setTimeout(function(){ fact({x:x+1}) }, 0);
}

function On(i)
{
  if (typeof i == 'object') return i
  else return document.getElementById(i).value;
}

function bcl(n, k)
{
	if (k>n / 2) k = n - k;
	if (k == 1)  return n;
	if (k == 0)  return 1;
	var r;
	if (n + k >= 90) {
		r = bcl(n - 1, k);
		r += +bcl(n - 1, k - 1);
	}
	else {
		r = 1;
		for (var i = 1; i <= k;++i) {
			r *= n - k + i;
			r /= i;
		}
	}
	return r;
}
		var k, n;
		var f;
		//1
		function conmb1(){
			f = Math.pow(On('n1'), On('k1'));
			document.getElementById('result1').innerHTML='Результат: '+ f;
			}
		//2
		function conmb2(){
			f = fact(On('n2'))/fact(On('n2')-On('k2'));
			document.getElementById('result2').innerHTML='Результат: '+ f;
			}
		//3
		function conmb3(){
			var q = fact(On('n3') + On('k3') - 1);
			f = (fact(Number(On('n3')) + Number(On('k3')) - 1))/(fact(On('k3'))*fact(On('n3')-1));
			document.getElementById('result3').innerHTML='Результат: '+ f;
			}
		//4
		function conmb4(){
			f = fact(On('n4')) / (fact(On('n4') - On('k4'))*fact(On('k4')));
			document.getElementById('result4').innerHTML='Результат: '+ f;
			}
		//5
		function conmb5(){
			var g = 1;
			for(var t = 0; t < Number(On('k5')); t++){
				v = prompt("Введите элемент: ");
				g = g * fact(v);
			}
			f = fact(Number(On('n5'))) / g;
			document.getElementById('result5').innerHTML='Результат: '+ f;
			}
		//6
		function conmb6(){
			f = fact(On('n6'));
			document.getElementById('result6').innerHTML='Результат: '+ f;
			}
		//7
		function conmb7(){
			f = bcl(On('n7'), On('k7'));
			document.getElementById('result7').innerHTML='Результат: '+ f;
			}
		//8
		function conmb8(){
			f = fact(On('n8'));
			document.getElementById('result8').innerHTML='Результат: '+ f;
			}