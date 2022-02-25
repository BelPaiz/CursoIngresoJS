/*Paiz Belen
Tp. 01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	suma=precioUno+precioDos+precioTres;
	alert("El resultado de la suma es: "+suma);
}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let promedio;
	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	promedio=(precioUno+precioDos+precioTres)/3;
	alert("El promedio es: "+promedio);
}
	
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let precioFinal;
	let iva;
	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	iva=21/100;
	precioFinal=precioUno+(precioUno*iva)+precioDos+(precioDos*iva)+precioTres+(precioTres*iva);
	alert("El costo total es: $"+precioFinal+" (IVA incluido).");
	
}