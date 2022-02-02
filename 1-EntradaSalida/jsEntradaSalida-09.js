/*
Belen Paiz
e/s 09 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
9 bis
en el ejercicio 9 e/s
lo anterior mas
se debe pedir el % por prompt*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let porcentajeDeAumento;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	porcentajeDeAumento = prompt("Ingrese porcentaje de aumento", " Porcentaje");	
	resultado=sueldo*porcentajeDeAumento/100 + sueldo;
	document.getElementById('txtIdResultado').value=resultado;

}