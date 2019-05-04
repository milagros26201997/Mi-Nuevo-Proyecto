function ver(n) {
         document.getElementById

("subseccion"+n).style.display="block"
         }
function ocultar(n) {
         document.getElementById

("subseccion"+n).style.display="none"
         }

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
var multiplicacion = document.getElementById

('multiplicacion');
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
  nueve.onclick = function(e){ resultado.textContent = 

resultado.textContent  +  "9";
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
