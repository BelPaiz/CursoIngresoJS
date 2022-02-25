/*Paiz Belen
while 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!="utn750")
	{
		alert("Clave incorrecta. (Ayuda: es utn750)")
		claveIngresada = prompt("ingrese el número clave.");
	}
	
}//FIN DE LA FUNCIÓN
