/* debugger

let username = prompt("Ingrese su nombre de usuario:");
let password = prompt("Ingrese su contraseña");

if ((username == "Coderhouse") && (password == "123456" )){
    console.log("bienvenido")
}else {
    alert("nombre de usario incorrecto")
}
 */
debugger

let item = parseInt(prompt("Ingrese un numero:"))

for (let a = 0; a < item; a++) {
    console.log ("Iteracion Nro.", a)
    if (a === 15) {
        break
    }
}


let dato1 = true
let num = parseInt(prompt("Ingresa un número:"))
let factor = 1

while(dato1) {
    console.log("Resultado", num * factor)
    dato1 = confirm("Siguiente multiplicación")
    if (dato1) {
        factor++
    }
}


/* function calcular() {
    let numero1 = parseInt(prompt("ingrese un numero:"))
} */