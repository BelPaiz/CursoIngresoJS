/*Paiz Belen 
switch 03
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	let mesDelAño;
	mesDelAño=document.getElementById('txtIdMes').value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes no tiene más de 29 días.";
		break;
		default:
			mensaje="Este mes tiene 30 o más días";
		break;
	}
	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓNfunction mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	
	


}//FIN DE LA FUNCIÓN