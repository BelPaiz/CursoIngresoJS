/*Paiz Belen
while 06
Al presionar el botón pedir 5 números 
e informar la suma acumulada y el promedio.*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un  numero", "numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;

	}
	
	//
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN