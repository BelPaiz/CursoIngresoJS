/*Paiz Belen
if 03
Al ingresar una edad debemos informar si 
la persona es mayor de edad, 
sino informar que es un menor de edad.
*/
function mostrar()
{
	let edadIngresada;
	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);



	if(edadIngresada>17)
	{
		alert("Esta persona es mayor de edad.");
	}

	else
	{
		alert("Esta persona es menor de edad.");
	}

}