/*
███╗░░░███╗░█████╗░██╗███╗░░██╗
████╗░████║██╔══██╗██║████╗░██║
██╔████╔██║███████║██║██╔██╗██║
██║╚██╔╝██║██╔══██║██║██║╚████║
██║░╚═╝░██║██║░░██║██║██║░╚███║
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚══╝
*/

var operandoa;
var operandob;
var operacion;
var ce = document.getElementById("botonCe");
var resultC = document.getElementById("contenedorResultado");
var resetB = document.getElementById("resetbu");
var sum = document.getElementById("botonSum");
var mul = document.getElementById("botonMul");
var div = document.getElementById("botonDiv");
var res = document.getElementById("botonRes");
var result = document.getElementById("bresult");
var zero = document.getElementById("boton0");
var one = document.getElementById("boton1");
var two = document.getElementById("boton2");
var three = document.getElementById("boton3");
var four = document.getElementById("boton4");
var five = document.getElementById("boton5");
var six = document.getElementById("boton6");
var seven = document.getElementById("boton7");
var eigth = document.getElementById("boton8");
var nine = document.getElementById("boton9");
var coma = document.getElementById("botonCom");

zero.onclick = function(){
    resultC.textContent = resultC.textContent + "0";
}
one.onclick = function(){
    resultC.textContent = resultC.textContent + "1";
}
two.onclick = function(){
    resultC.textContent = resultC.textContent + "2";
}
three.onclick = function(){
    resultC.textContent = resultC.textContent + "3";
}
four.onclick = function(){
    resultC.textContent = resultC.textContent + "4";
}
five.onclick = function(){
    resultC.textContent = resultC.textContent + "5";
}
six.onclick = function(){
    resultC.textContent = resultC.textContent + "6";
}
seven.onclick = function(){
    resultC.textContent = resultC.textContent + "7";
}
eigth.onclick = function(){
    resultC.textContent = resultC.textContent + "8";
}
nine.onclick = function(){
    resultC.textContent = resultC.textContent + "9";
}
coma.onclick = function(){
    resultC.textContent = resultC.textContent + ".";
}
ce.onclick = function(){
    resultC.textContent = "";
}
sum.onclick = function(){
    operandoa = resultC.textContent;
    operacion = "+";
    limpiar();
}
res.onclick = function(){
    operandoa = resultC.textContent;
    operacion = "-";
    limpiar();
}
mul.onclick = function(){
    operandoa = resultC.textContent;
    operacion = "×";
    limpiar();
}
div.onclick = function(){
    operandoa = resultC.textContent;
    operacion = "÷";
    limpiar();
}
result.onclick = function(){
    operandob = resultC.textContent;
    resolve();
}
resetB.onclick = function(){
    resetear();
}

function resolve(){
    var res = 0;    

    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "÷":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case "×":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
    }
    resetear();
    
    resultC.textContent = res;
}

function limpiar(){
    resultC.textContent = "";
    operandob = 0;
}

function resetear(){
    resultC.textContent = "";
    operandob = 0;
    operandoa = 0;
}

if(resultC.textContent == "NaN"){
    resultC.textContent = "Error";
}


