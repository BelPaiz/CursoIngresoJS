/*Paiz Belen
if 10
Al presionar el Botón,
 asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" 
para notas menores a 4
*/
function mostrar()
{
	let notaRandon;

	//Genero el número RANDOM entre 1 y 10 
	notaRandon=Math.floor(Math.random() * 10) + 1;
	
	if(notaRandon>8)
	{
		alert("Su nota es "+notaRandon+" EXCELENTE");
	}
	else
	{
		if(notaRandon<4)
		{
			alert("Su nota es "+notaRandon+" Vamos, la proxima se puede");
		}
		else
		{
			alert("Su nota es "+notaRandon+" APROBÓ");
		}
	
	}
}//FIN DE LA FUNCIÓN