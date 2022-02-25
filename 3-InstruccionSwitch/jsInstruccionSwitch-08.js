/*Paiz Belen 
switch 08
Al seleccionar un destino informar si 
hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	//txtIdDestino
	let destino;
	let mensaje;

	destino=document.getElementById('txtIdDestino').value;

	switch(destino)
	{
		case "Cataratas":
		case "Mar del plata":
			mensaje="En este destino hace Calor.";
		break;
		default:
			mensaje="En este destino hace Frio.";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN