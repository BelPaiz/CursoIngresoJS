/*Paiz Belen

Debemos realizar la carga de 5(cinco) 
productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
-el tipo (validar "barbijo" , "jabón" o "alcohol") ,
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo 
y no debe superar las 1000 unidades),
-la Marca y 
-el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad 
de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let contador;
	let banderaPrimerAlcohol;
	let menorPrecioAlcohol;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let contadorAlcohol;
	let contadorJabon;
	let contadorBarbijo;
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let promedioMasUnidades;
	let acumulaUnidadesAlcohol;
	let acumulaUnidadesJabon;
	let acumulaUnidadesBarbijo;

	contador=0;
	banderaPrimerAlcohol="el primero";
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	acumulaUnidadesAlcohol=0;
	acumulaUnidadesJabon=0;
	acumulaUnidadesBarbijo=0;


	while(contador<5)
	{
		contador=contador+1;
		tipo=prompt("Ingrese tipo de producto","Producto");
		tipo=tipo.toUpperCase();
		while(tipo!="BARBIJO" && tipo!="JABON" && tipo!="ALCOHOL")
		{
			tipo=prompt("Ingrese tipo de producto valido","Producto");
		}
		precio=prompt("Ingrese precio","precio");
		precio=parseInt(precio);
		while(isNaN(precio)||(precio<100 || precio>300))
		{
			precio=prompt("Ingrese precio","precio");
			precio=parseInt(precio);
		}
		cantidad=prompt("Ingrese cantidad: ","cantidad");
		cantidad=parseInt(cantidad);
		while(isNaN(cantidad)||(cantidad<0 || cantidad>1000))
		{
			cantidad=prompt("Ingrese cantidad: ","cantidad");
			cantidad=parseInt(cantidad);
		}

		marca=prompt("Ingrese marca","marca");

		fabricante=prompt("Ingrese fabricante","Nombre del fabricante");

		switch(tipo)
		{
			case "ALCOHOL":
				contadorAlcohol++;
				acumuladorAlcohol=acumuladorAlcohol+precio;
				acumulaUnidadesAlcohol=acumulaUnidadesAlcohol+cantidad;
				if (banderaPrimerAlcohol=="el primero")
				{
					menorPrecioAlcohol=precio;
					cantidadAlcoholBarato=cantidad;
					fabricanteAlcoholBarato=fabricante;
					banderaPrimerAlcohol="ya pase";
				}
				else
				{
					if (precio<menorPrecioAlcohol)
					{
					menorPrecioAlcohol=precio;
					cantidadAlcoholBarato=cantidad;
					fabricanteAlcoholBarato=fabricante;
					}
				}
			break;
			case "JABON":
				contadorJabon++;
				acumuladorJabon=acumuladorJabon+precio;
				acumulaUnidadesJabon=acumulaUnidadesJabon+cantidad;
			break;
			default:
				contadorBarbijo++;
				acumuladorBarbijo=acumuladorBarbijo+precio;
				acumulaUnidadesBarbijo=acumulaUnidadesBarbijo+cantidad;
			break;
		}
		if (acumulaUnidadesAlcohol>acumulaUnidadesJabon && acumulaUnidadesAlcohol>acumulaUnidadesBarbijo )
		{
			promedioMasUnidades=acumuladorAlcohol/contadorAlcohol;
		}
		else
		{
			if (acumulaUnidadesJabon>acumulaUnidadesBarbijo)
			{
				promedioMasUnidades=acumuladorJabon/contadorJabon;
			}
			else
			{
				promedioMasUnidades=acumuladorBarbijo/contadorBarbijo;
			}
		}
	}
	document.write("a) Alcohol mas barato: "+"<br>"+" La cantidad de unidades es: "+cantidadAlcoholBarato+" y el fabricante es: "+fabricanteAlcoholBarato+"<br>");
	document.write("b) Del tipo con mas unidades, el promedio por compra es: "+promedioMasUnidades+"<br>");
	document.write("c) La cantidad total de jabones es: "+acumuladorJabon);
}
