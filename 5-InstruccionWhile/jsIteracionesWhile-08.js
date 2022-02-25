/*Paiz Belen
while 08
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="S";

	while(respuesta=="S")
	{
		numeroIngresado=prompt("Ingrese un  numero", "numero");
		numeroIngresado=parseInt(numeroIngresado);
		if (numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		else
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
		}
		respuesta=prompt("¿Desea continuar?:","S para continuar");
		respuesta=respuesta.toUpperCase();
	}


	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN