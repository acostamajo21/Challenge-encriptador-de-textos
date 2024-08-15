function encriptar (){
    let texto = document.getElementById("texto").value;
    let titulomensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let personas = document.getElementById("personas");
    
    let textocifrado = texto
    .replace (/a/gi, "ambar")
    .replace (/e/gi, "enter")
    .replace (/i/gi, "ikigai")
    .replace (/o/gi, "oraculo")
    .replace (/u/gi, "unad");

    if (texto.length != 0) {
        document.getElementById("texto").value = textocifrado;
        titulomensaje.textContent = "texto encriptado con exito";
        parrafo.textContent = "";
        personas.src = "./img/encriptado.jpg";
        console.log(textocifrado);
    }
    else {
        personas.src = "./img/lupa.jpg";
        titulomensaje.textContent = "ningun mensaje fue encontrado";
        parrafo.textContent = "ingresa el texto que desea encriptar o desencriptar";
        alert("debes ingresar algun texto");

    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let titulomensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let personas = document.getElementById("personas");
   
    let textocifrado = texto 
    .replace (/ambar/gi, "a")
    .replace (/enter/gi, "e")
    .replace (/ikigai/gi, "i")
    .replace (/oraculo/gi, "o")
    .replace (/unad/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textocifrado;
        titulomensaje.textContent = "texto desencriptado con exito";
        parrafo.textContent = "";
        personas.src = "./img/desencriptado.jpg";
       }
       else {
        personas.src = "./img/lupa.jpg";
        titulomensaje.textContent = "ningun mensaje fue encontrado";
        parrafo.textContent = "ingresa el texto que desea encriptar o desencriptar";
        alert("debes ingresar algun texto");
       }
}
