/* prueba con arreglos
var vocales = ["a","e","i","o","u"]
var cambios = ["ai","enter","imes","ober","ufat"]

console.log(vocales)
console.log(cambios)
*/
function datosencriptar() {
    var captura = document.getElementById('palabraEncriptada').value
    console.log(captura)
//    var respuesta = document.getElementById('encriptada') 
//Prueba en una linea
    var encriptacion =  captura.replace(/e/img, "enter").replace(/o/img, "ober").replace(/i/img, "imes").replace(/a/img, "ai").replace(/u/img, "ufat")
//Prueba normal
    /*var encriptacion =  encriptacion.replace(/o/img, "ober")
    var encriptacion =  encriptacion.replace(/i/img, "imes")
    var encriptacion =  encriptacion.replace(/a/img, "ai")
    var encriptacion =  encriptacion.replace(/u/img, "ufat")*/
    
    document.getElementById('encriptada').value = encriptacion
}
function datosdescencriptar(){
    var captura = document.getElementById('palabraEncriptada').value
    console.log(captura)
//Invertir la logica de encriptar
    var desencriptacion =  captura.replace(/enter/img, "e").replace(/ober/img, "o").replace(/imes/img, "i").replace(/ai/img, "a").replace(/ufat/img, "u")
    document.getElementById('encriptada').value = desencriptacion
}
function copiar(){
    var copia = document.getElementById('encriptada');
    copia.select();
    document.execCommand("copy")
}