function ver(n) {
         document.getElementById("subseccion"+n).style.display="block"
         }
function ocultar(n) {
         document.getElementById("subseccion"+n).style.display="none"
         }

//calculadora 


var variable1;
var variable2;
var operacion;

function init(){
 var potencia = document.getElementById('potencia');
  var punto = document.getElementById('punto');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero'); 
var resultado = document.getElementById('resultado');
  var reset = document.getElementById('reset');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var igual = document.getElementById('igual');
 
}

  uno.onclick = function(e){
  		resultado.textContent =  
resultado.textContent  + "1";
  }
  dos.onclick = function(e){
  		resultado.textContent =  
resultado.textContent  + "2";
  }
  tres.onclick = function(e){
  		resultado.textContent =  
resultado.textContent  + "3";
  }
  cuatro.onclick = function(e){
  		resultado.textContent =  
resultado.textContent  + "4";
  }
  cinco.onclick = function(e){
  		resultado.textContent =  
resultado.textContent  + "5";
  }
  seis.onclick = function(e){
  		resultado.textContent =  
resultado.textContent  + "6";
  }
  siete.onclick = function(e){
  		resultado.textContent =  
resultado.textContent  + "7";
  }
  ocho.onclick = function(e){
  		resultado.textContent =  
resultado.textContent  + "8";
  }
  nueve.onclick = function(e){ resultado.textContent = resultado.textContent  +  "9";
  }
  cero.onclick = function(e){
  		resultado.textContent =  
resultado.textContent  + "0";
  }
  reset.onclick = function(e){
  		resetear();
  }
  suma.onclick = function(e){
  		variable1 = resultado.textContent;
  		operacion = "+";
  		limpiar();
  }
  resta.onclick = function(e){
  		variable1 = resultado.textContent;
  		operacion = "-";
  		limpiar();
  }
  multiplicacion.onclick = function(e){
  		variable1 = resultado.textContent;
  		operacion = "*";
  		limpiar();
  }
  division.onclick = function(e){
  		variable1 = resultado.textContent;
  		operacion = "/";
  		limpiar();
  }
  igual.onclick = function(e){
  		variable2 = resultado.textContent;
  		resolver();
  }



function limpiar(){
  resultado.textContent = "";
}

function resetear(){
  resultado.textContent = "";
  variable1 = 0;
  variable2 = 0;
  operacion = "";
}



function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(variable1) + parseFloat 
(variable2);
      break;

    case "-":
        res = parseFloat(variable1) - parseFloat 
(variable2);
        break;

    case "*":
      res = parseFloat(variable1) * parseFloat 
(variable2);
      break;

    case "/":
      res = parseFloat(variable1) / parseFloat 
(variable2);
      break;
  }
  resetear();
  resultado.textContent = res;
}




function actual() {
         fecha=new Date(); 
         hora=fecha.getHours();
         minuto=fecha.getMinutes();
         segundo=fecha.getSeconds();
         if (hora<10) {
            hora="0"+hora;
            }
         if (minuto<10) {
            minuto="0"+minuto;
            }
         if (segundo<10) {
            segundo="0"+segundo;
            }
          mireloj = hora+" : "+minuto+" : "+segundo;	
				 return mireloj; 
         }
function actualizar() {
   mihora=actual(); 
   mireloj=document.getElementById("reloj");
   mireloj.innerHTML=mihora;
	 }
setInterval(actualizar,1000);





var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio () {
	control = setInterval(cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = false;
}
function parar () {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = false;
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}


function myFunction(){
	document.getElementById("demo").innerHTML = "El texto esta compuesto por signos de uno o varios alfabetos, que guardan relación entre sí; la aceptación moderna de la palabra texto, significa cualquier manifestación verbal y completa que se produzca en una comunicación. Por ende, son textos los escritos de literatura que leemos, las redacciones y exposiciones de las personas, las noticias en la prensa, pancartas publicitarias, los escritos en las cartas, conversaciones o diálogos, entre otros.";
	}

function myFunction2(){
document.getElementById("demo2").style.color = "red";
document.getElementById("demo2").style.fontSize = "25px";
document.getElementById("demo2").style.fontFamily="Chiller";
document.getElementById("demo2").style.background= "black";
}


function calcularTotal(){
   var monto=Number(document.getElementById("monto").value);
   var igv=Number(document.getElementById("igv").value);
   var total;
   total=(monto+(monto*(igv/100)));
   document.getElementById("parrafoTotal").innerHTML = "Total de venta: " + total;
}

