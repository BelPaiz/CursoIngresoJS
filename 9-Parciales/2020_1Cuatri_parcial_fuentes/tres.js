/*Paiz Belen
03
En el ingreso a un viaje en avion nos 
solicitan 
nombre , 
edad, 
sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o 
viudos.
d) cuantas personas de la tercera edad( mas 
de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;
	let banderaMayorTemperatura;
	let mayorTemperatura;
	let nombreMayorTemperatura;
	let contadorMayoresViudos;
	let contadorHombreSoltero;
	let contadorHombreViudo;
	let contadorFiebreTerceraEdad;
	let acumuladorEdadHombreSoltero;
	let promedioEdadHombreSoltero;
	let mensaje;

	respuesta=true;
	banderaMayorTemperatura="primera";
	contadorMayoresViudos=0;
	contadorHombreViudo=0;
	contadorHombreSoltero=0;
	contadorFiebreTerceraEdad=0;
	contadorHombreSoltero=0;
	acumuladorEdadHombreSoltero=0;
	mensaje="";


	while(respuesta==true)
	{
		nombre=prompt("Ingrese nombre: ","Nombre");
		edad=prompt("Ingrese edad: ","Edad");
		edad=parseInt(edad);
		while(isNaN(edad) || (edad<0 || edad>120 ))
		{
			edad=prompt("Ingrese edad valida: ","Edad");
			edad=parseInt(edad);
		}
		sexo=prompt("Ingrese sexo: ","F o M");
		sexo=sexo.toUpperCase();
		while(sexo!= "F" && sexo!= "M")
		{
			sexo=prompt("Ingrese sexo valido: ","F o M ");
			sexo=sexo.toUpperCase();
		}
		estadoCivil=prompt("Ingrese estado civil:","SOLTERO, CASADO O VIUDO");
		estadoCivil=estadoCivil.toUpperCase();
		while(estadoCivil!= "SOLTERO" && estadoCivil!= "CASADO" && estadoCivil!="VIUDO")
		{
			estadoCivil=prompt("Ingrese estado civil valido:","SOLTERO, CASADO O VIUDO");
			estadoCivil=estadoCivil.toUpperCase();
		}
		temperaturaCorporal=prompt("Ingrese temperatura corporal:","temperatura");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal) || (temperaturaCorporal<35 || temperaturaCorporal>45))
		{
			temperaturaCorporal=prompt("Ingrese temperatura corporal:","temperatura");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}
		if (banderaMayorTemperatura=="primera")//a
		{
			mayorTemperatura=temperaturaCorporal;
			nombreMayorTemperatura=nombre;
			banderaMayorTemperatura="ya pase";
		}
		else
		{
			if(temperaturaCorporal>mayorTemperatura)
			{
				mayorTemperatura=temperaturaCorporal;
				nombreMayorTemperatura=nombre;
			}
		}
		switch(estadoCivil)//b - c
		{
			case "VIUDO":
				if (edad>17)
				{
					contadorMayoresViudos=contadorMayoresViudos+1;
				}
				if (sexo=="M")
				{
					contadorHombreViudo=contadorHombreViudo+1;
				}
			break;
			case "SOLTERO":
				if (sexo=="M") //e
				{
					contadorHombreSoltero=contadorHombreSoltero+1;
					acumuladorEdadHombreSoltero=acumuladorEdadHombreSoltero+edad;
				}
			break;
		}
		if (temperaturaCorporal>38) //d
		{
			if (edad>60)
			{
				contadorFiebreTerceraEdad=contadorFiebreTerceraEdad+1;
			}
		}
		respuesta=confirm("¿Desea seguir cargando pasajeros?:");
	}
	if (contadorHombreSoltero>0)
	{
		promedioEdadHombreSoltero=acumuladorEdadHombreSoltero/contadorHombreSoltero;//e
	}
	else
	{
		promedioEdadHombreSoltero="No se ingresaron hombres Solteros";
	}
	mensaje="a) El nombre de la persona con mas temperatura es: ";
	mensaje=mensaje+nombreMayorTemperatura;

	mensaje=mensaje+"<br> b) La cantidad de mayores de edad viudos es: ";
	mensaje=mensaje+contadorMayoresViudos;

	mensaje=mensaje+"<br>c) La cantidad de hombres solteros es: ";
	mensaje=mensaje+contadorHombreSoltero;
	mensaje=mensaje+"<br>"+"La cantidad de hombres viudos es: ";
	mensaje=mensaje+contadorHombreViudo;

	mensaje=mensaje+"<br>d) La cantidad de personas mayores de 60 años con fiebre es: ";
	mensaje=mensaje+contadorFiebreTerceraEdad;

	mensaje=mensaje+"<br>e) El promedio de edad entre los hombres solteros es: ";
	mensaje=mensaje+promedioEdadHombreSoltero;
	
	document.write(mensaje);
}
