/*Paiz Belen
while 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado=prompt("Ingrese sexo: ","Ingrese F o M ");
	
	sexoIngresado=sexoIngresado.toUpperCase();

	while(sexoIngresado!= "F" && sexoIngresado!= "M")
	{
		sexoIngresado=prompt("Ingrese sexo: ","Ingrese letra valida F o M ");
		sexoIngresado=sexoIngresado.toUpperCase();
	}

document.getElementById('txtIdSexo').value=sexoIngresado;
}//FIN DE LA FUNCIÓN