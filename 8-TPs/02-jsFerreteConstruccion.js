/*2.
Paiz Belen
Tp. 02
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
//txtIdLargo
//txtIdAncho
//txtIdRadio

function Rectangulo () 
{
	let largoRectangulo;
	let anchoRectangulo;
	let perimetro;
	let cantidadTotalAlambre;

	largoRectangulo=document.getElementById('txtIdLargo').value;
	anchoRectangulo=document.getElementById('txtIdAncho').value;
	
	largoRectangulo=parseInt(largoRectangulo);
	anchoRectangulo=parseInt(anchoRectangulo);
	
	perimetro=(2*largoRectangulo)+(2*anchoRectangulo);
	cantidadTotalAlambre=3*perimetro;
	
	alert("Usted necesita: "+cantidadTotalAlambre+"m de alambre para alambrar con tres hilos.")
}
function Circulo () 
{
	let radioCirculo;
	let perimetroCirculo;
	let cantidadAlambreCirculo;
	
	radioCirculo=document.getElementById('txtIdRadio').value;
	radioCirculo=parseInt(radioCirculo);
	
	perimetroCirculo=radioCirculo*2*Math.PI;
	cantidadAlambreCirculo=3*perimetroCirculo;
	
	alert("Usted necesita: "+cantidadAlambreCirculo.toFixed(2)+"m de alambre para alambrar con tres hilos.")

}
function Materiales () 
{
	let largoRectangulo;
	let anchoRectangulo;
	let areaRectangulo;
	let bolsasCemento;
	let bolsasCal;
	
	largoRectangulo=document.getElementById('txtIdLargo').value;
	anchoRectangulo=document.getElementById('txtIdAncho').value;
	
	largoRectangulo=parseInt(largoRectangulo);
	anchoRectangulo=parseInt(anchoRectangulo);
	
	areaRectangulo=largoRectangulo*anchoRectangulo;
	bolsasCemento=areaRectangulo*2;
	bolsasCal=areaRectangulo*3;
	
	alert("Usted necesita: "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" bolsas de cal.");	
}