/*
Belen Paiz
e/s 10bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
10 bis
en el ejercicio 10 e/s
lo anterior mas
se debe pedir el % por prompt*/
function mostrarDescuento()
{
	let importe;
	let resultado;
	let porcentajeDeDescuento;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);
	porcentajeDeDescuento = prompt("Ingrese porcentaje de descuento", " Porcentaje");	
	resultado=importe-importe*porcentajeDeDescuento/100;
	document.getElementById('txtIdResultado').value=resultado;

}