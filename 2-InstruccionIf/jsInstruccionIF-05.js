/*Paiz Belen
if 05
Al ingresar una edad solo 
debemos informar si 
la persona NO es adolescente.*/
function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	/*funciona
	if(!(edadIngresada>12 && edadIngresada<18))
	{
		alert("Su edad es: "+edadIngresada+" años, NO es adolescente.");
	}*/
	/*funciona
	if(edadIngresada>17)
	{
		alert("Su edad es: "+edadIngresada+" años, NO es adolescente.");
	}
	if(edadIngresada<13)
	{
		alert("Su edad es: "+edadIngresada+" años, NO es adolescente.");
	}*/
	if(edadIngresada<13 || edadIngresada>17)
	{
		alert("Su edad es: "+edadIngresada+" años, NO es adolescente.");
	}
	

}//FIN DE LA FUNCIÓN