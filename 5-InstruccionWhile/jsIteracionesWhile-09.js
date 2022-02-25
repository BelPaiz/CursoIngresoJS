/*Paiz Belen
while 09
Al presionar el botón pedir  números  hasta 
que el usuario quiera,
mostrar el número máximo y el número 
mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta="S";
	while(respuesta=="S")
	{
		numeroIngresado=prompt("Ingrese un  numero", "numero");
		numeroIngresado=parseInt(numeroIngresado);

		if (banderaDelPrimero=="es el primero")
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero="ya pase";
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			if (numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
		}
		respuesta=prompt("¿Desea continuar?:","S para continuar");
		respuesta=respuesta.toUpperCase();
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN