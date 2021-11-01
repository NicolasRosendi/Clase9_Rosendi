var d;
var e;
var h;
var g;
var t;
const lista = [];


let logearse = document.getElementById("logeo");
let box =document.getElementById("cuerpo");
var boton = document.getElementById("boton");

logearse.addEventListener("click", nis);


function nis(){
    let login = document.getElementById("cuerpo");
    login.parentNode.removeChild(login);
    asistente();
    
}

function nombre(n, o){
    this.n = n;
    this.o = o;
    }

ramen();

function ramen(){
    alert("Comienza secuencia de registro")
    const g = new nombre (d = prompt("Nombre"), e = prompt("Apellido"));
    alert("Registro completo, ingrese sesión")
    document.getElementById("nusuario").value = d;
    document.getElementById("rusuario").value = e;
}
//     alert("No se preocupe por los espacios vacios, su nombre quedará encuadrado en la página en cuanto salga para comprobar que los datos cargaran correctamente");
    
// }

// asistente();


function cambio(Dou){
    Dou = prompt("Cambiar el nombre presionando '1' o revisarlo presionando '2', o '3' para volver al asistente")
    switch(Dou){
        case "1":
            const h = new nombre (d = prompt("Nombre"), e = prompt("Apellido"));
            alert("Nombre Cambiado");
            return cambio();

        case "2":
            alert("Usuario" + " " + d + " " + e);
            return cambio();

        case "3":
            return asistente();

        default:
            alert("Comando no comprendido");
            return cambio();
    }
}

function asistente(principal) {
    principal = prompt("Diga un comando o utilize 'HELP' para conocerlos").toUpperCase();
switch (principal) {
    case "HELP":
        alert("Los comandos son 'ESC', 'CALCULADORA', 'RR', 'USUARIO' y 'LISTA'")
        return asistente();
    
    
        case "RR":
        alert("Never gonna give you up, never gonna let you down, never gonna run around and desert you...")
        return asistente();

        case "USUARIO":
            alert("Ingresando a opciones de USUARIO");
            return cambio();
    
    
        case "CALCULADORA":
        return calc();

        case "LISTA":
            return amigo();
    

    default:
        alert("Error, comando:" + " " + "'" + principal + "'" + " " + "No reconocido")
        return asistente();
        

        case "ESC":
    
        break;
}
    
} {
    
}


function calc(cuenta, n1, n2, operacion) {
    operacion = prompt("elija '+' para suma, '-' para resta, '*' para multiplicar, o '/' para dividir. También puede utilizar 'ESC' para salir de la calculadora").toUpperCase();
    switch (operacion) {
        case "+":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));
            cuenta = n1 + n2;
            alert(cuenta)
            return calc();
        case "ESC":
            return asistente();
        case "-":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));
            cuenta = n1 - n2;
            alert(cuenta)
            return calc();
        case "*":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));
            cuenta = n1 * n2;
            alert(cuenta)
            return calc();
        case "/":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));                
            cuenta = n1 / n2;
            alert(cuenta)
            return calc();                
    
        default:
        alert("Error, comando:" + " " + "'" + operacion + "'" + " " + "No reconocido");
            return calc();
    }
}



function amigo(dios){
    dios = prompt("Ingrese '1' para añadir cosas a la lista o '2' para revisarla, sino ingrese '3' para salir");
    switch(dios){
        case "1":
            t = prompt("Nuevo dato");
            lista.push(t);
            return amigo();

        case "2":
            alert(lista);
            return amigo();

        case "3":
            return asistente();

        default:
            alert("Lo siento" + " " + d + "," + " " + "pero no entendí ese comando");
            return amigo(); 
    }
}

