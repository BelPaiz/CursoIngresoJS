/*3.Paiz Belen
Tp. 03
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//txtIdTemperatura
function FahrenheitCentigrados () 
{
	let temperaturaIngresada;
	let conversorACentigrado;

	temperaturaIngresada=document.getElementById('txtIdTemperatura').value;
	temperaturaIngresada=parseInt(temperaturaIngresada);
	
	conversorACentigrado=(temperaturaIngresada-32)/1.8;
	alert(temperaturaIngresada+" grados Fahrenheit son "+conversorACentigrado.toFixed(1)+" grados Centígrados.")

}

function CentigradosFahrenheit () 
{
	let temperaturaIngresada;
	let conversorAFahrenheit;
	temperaturaIngresada=document.getElementById('txtIdTemperatura').value;
	temperaturaIngresada=parseInt(temperaturaIngresada);
	conversorAFahrenheit=(temperaturaIngresada*1.8)+32;
	alert(temperaturaIngresada+" grados Centígrados son "+conversorAFahrenheit.toFixed(1)+" grados Fahrenheit .")

}
