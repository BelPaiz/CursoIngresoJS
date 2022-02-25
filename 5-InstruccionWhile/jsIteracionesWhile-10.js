/*Paiz Belen
While 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numeroIngresado;
	let respuesta;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let numeroPar;
	let sumaNegativos;
	let sumaPositivos;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPositivosNegativos;

	contadorPositivos=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorPares=0;
	sumaNegativos=0;
	sumaPositivos=0;
	

	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un  numero", "numero");
		numeroIngresado=parseInt(numeroIngresado);
		numeroPar=numeroIngresado%2;

		switch(numeroIngresado)
		{
			case 0:
					contadorCeros=contadorCeros+1;
			break;
			default:
				if (numeroPar==0)
				{
					contadorPares=contadorPares+1;
				}
				if (numeroIngresado<0)
				{
					contadorNegativos=contadorNegativos+1;
					sumaNegativos=sumaNegativos+numeroIngresado;
				}
				else
				{
					contadorPositivos=contadorPositivos+1;
					sumaPositivos=sumaPositivos+numeroIngresado;
				}
			break;
		}
		
		respuesta=confirm("¿Desea continuar agregando numeros?");
		
	}//fin del while

	diferenciaPositivosNegativos=sumaPositivos - sumaNegativos;

	document.write("Cantidad de numeros positivos: "+contadorPositivos+"<br>");
	document.write("Suma de numeros posivitos: "+sumaPositivos+"<br>");
		if (contadorPositivos>0)
	{
		promedioPositivos=sumaPositivos/contadorPositivos;
		document.write("Promedio de numeros positivos: "+promedioPositivos+"<br>");
	}
	else
	{
		document.write("El promedio de positivos no se puede calcular, no se ingresaron numeros positivos"+"<br>");
	}
	document.write("Cantidad de numeros negativos: "+contadorNegativos+"<br>");
	document.write("Suma de numeros negativos: "+sumaNegativos+"<br>");
		if (contadorNegativos>0)
	{
		promedioNegativos=sumaNegativos/contadorNegativos;
		document.write("Promedio de numeros negativos: "+promedioNegativos+"<br>");
	}
	else
	{
		document.write("El promedio de negativos no se puede calcular, no se ingresaron numeros negativos"+"<br>");
	}
	document.write("Cantidad de ceros: "+contadorCeros+"<br>");
	document.write("Cantidad de numeros pares: "+contadorPares+"<br>");
	document.write("Diferencia entre la suma de numeros positivos y negativos: "+diferenciaPositivosNegativos);

}//FIN DE LA FUNCIÓN