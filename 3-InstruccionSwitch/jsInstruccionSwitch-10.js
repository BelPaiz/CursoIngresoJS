/*Paiz Belen 
switch 10
una agencia de viajes nos piden informar 
si hacemos viajes a lugares según la estación 
del año estemos, informar si "Se viaja" 
o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa 
"se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/
//txtIdEstacion Invierno Verano Otoño Primavera
//txtIdDestino Bariloche Cataratas Mar del plata Cordoba

function mostrar()
{
	let destino;
	let estacion;
	let mensaje;
	let mensajeSi;
	let mensajeNo;

	destino=document.getElementById('txtIdDestino').value;
	estacion=document.getElementById('txtIdEstacion').value;

	mensajeSi="Se viaja";
	mensajeNo="No se viaja";

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje=mensajeSi;
				break;
				default:
					mensaje=mensajeNo;
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje=mensajeSi;
				break;
				default:
					mensaje=mensajeNo;
				break;
			}
		break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje=mensajeNo;
				break;
				default:
					mensaje=mensajeSi;
				break;
			}
		break;
		default:
			mensaje=mensajeSi;
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN