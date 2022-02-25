/*Paiz Belen
Realizar el algoritmo que permita ingresar 
los datos de una compra productos de la 
construccion, hasta que el cliente quiera:
-Tipo validad("arena";"cal";"cemento")
-Cantidad de bolsas,
-Precio por bolsa (más de cero ),

-Si compro más de 10 bolsas en total tenes 15% 
de descuento sobre el total a pagar.
-Si compro más de 30 bolsas en total tenes 25% 
de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
Curso de ingreso UTN FRA*/
function mostrar()
{
  let tipoProducto;
  let cantidadBolsas;
  let precioBolsa;
  let respuesta;
  let cantidadTotalBolsas;
  let precioTotalAcumulado;
  let porcentaje;
  let descuento;
  let precioConDescuento;
  let acumuladorBolsasArena;
  let acumuladorBolsasCal;
  let acumuladorBolsasCemento;
  let tipoConMasBolsas;
  let banderaDelMasCaro;
  let precioMasCaro;
  let tipoMasCaro;

  respuesta=true;
  banderaDelMasCaro="el mas caro";
  precioTotalAcumulado=0;
  acumuladorBolsasCemento=0;
  acumuladorBolsasCal=0;
  acumuladorBolsasArena=0;
  cantidadTotalBolsas=0;

  while(respuesta==true)
  {
    tipoProducto=prompt("Ingrese tipo de producto:","Tipo");
    tipoProducto=tipoProducto.toUpperCase();
    while(tipoProducto!="ARENA" && tipoProducto!="CAL" && tipoProducto!="CEMENTO")
    {
      tipoProducto=prompt("Ingrese tipo de producto valido:","arena, cal o cemento");
      tipoProducto=tipoProducto.toUpperCase();
    }

    cantidadBolsas=prompt("Ingrese cantidad de bolsas:","cantidad");
    cantidadBolsas=parseInt(cantidadBolsas);
    cantidadTotalBolsas=cantidadTotalBolsas+cantidadBolsas;

    precioBolsa=prompt("Ingrese precio por bolsa:","precio");
    precioBolsa=parseInt(precioBolsa);
    while(isNaN(precioBolsa) || precioBolsa<0)
    {
      precioBolsa=prompt("Ingrese precio por bolsa valido:","precio");
      precioBolsa=parseInt(precioBolsa);
    }
    if (banderaDelMasCaro=="el mas caro")
    {
      precioMasCaro=precioBolsa;
      tipoMasCaro=tipoProducto;
      banderaDelMasCaro="ya pase";
    }
    else
    {
      if (precioBolsa>precioMasCaro)
      {
        precioMasCaro=precioBolsa;
        tipoMasCaro=tipoProducto;
      }
    }
    precioTotalAcumulado=precioTotalAcumulado+precioBolsa;
    respuesta=confirm("¿Desea continuar agregando productos?");

    switch(tipoProducto)
    {
      case "ARENA":
        acumuladorBolsasArena=acumuladorBolsasArena+cantidadBolsas;
      break;
      case "CAL":
        acumuladorBolsasCal=acumuladorBolsasCal+cantidadBolsas;
      break;
      default:
        acumuladorBolsasCemento=acumuladorBolsasCemento+cantidadBolsas;
      break;
    }
  }
  if (acumuladorBolsasArena>acumuladorBolsasCal && acumuladorBolsasArena>acumuladorBolsasCemento)
  {
    tipoConMasBolsas="ARENA";
  }
  else
  {
    if(acumuladorBolsasCal>acumuladorBolsasCemento)
    {
      tipoConMasBolsas="CAL";
    }
    else
    {
      tipoConMasBolsas="CEMENTO";
    }
  }
  if (cantidadTotalBolsas>10)
  {
    porcentaje=15/100;
    if (cantidadTotalBolsas>30)
    {
      porcentaje=25/100;
    }
  }
  else
  {
    porcentaje=1;
  }
  
  descuento=precioTotalAcumulado*porcentaje;
  precioConDescuento=precioTotalAcumulado - descuento;

  document.write("a) El importe total a pagar es: "+precioTotalAcumulado+"<br>");
  document.write("b) El importe total a pagar con descuento es: "+precioConDescuento+"<br>");
  document.write("d) El tipo con mas cantidad de bolsas es: "+tipoConMasBolsas+"<br>");
  document.write("f) El tipo mas caro es: "+tipoMasCaro)
}
