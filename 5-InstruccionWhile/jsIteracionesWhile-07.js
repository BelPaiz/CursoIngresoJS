/*Paiz Belen
while 07
Al presionar el botón pedir números hasta 
que el USUARIO QUIERA e informar 
la suma acumulada y el promedio.*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta="S";
	
	while(respuesta=="S")
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un  numero", "numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("¿Desea continuar?:","S para continuar");
		respuesta=respuesta.toUpperCase();
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN