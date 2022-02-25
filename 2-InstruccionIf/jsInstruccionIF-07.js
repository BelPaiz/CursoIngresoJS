/*Paiz Belen
if 07
Al ingresar una edad menor a 18 años 
y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.'*/
function mostrar()
{
	let edadIngresada;
	let estadoCivil;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);
	estadoCivil=document.getElementById('estadoCivil').value;

	if(estadoCivil!="Soltero")
	{
		if (edadIngresada<18)
		{
			alert("Es muy pequeño para NO ser soltero.");
		}
	}
	


}//FIN DE LA FUNCIÓN