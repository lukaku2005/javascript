let bandera = true
let totalDeCompra = 0
const metodosDePago = ["Efectivo", "Debito", "Credito", "Mercado Pago"]

const logicaDeCompra = (valor, cantidad) => {
    totalDeCompra = totalDeCompra + valor * cantidad
}


while(bandera){
    let componenteElegido = parseInt(prompt("¿Que componente desea adquirir?: \n\n 1- Gabinete \n 2- Placa Madre \n 3- Tarjeta Grafica \n 4- Procesador \n 5- Memoria RAM \n 6- Disco duro"))
    let cantidad
    switch(componenteElegido){
        case 1:
            cantidad = parseInt(prompt("¿Cuantos gabinetes desea comprar?"))
            if(cantidad < 1){
                alert("Ingresa un valor mayor a 0")
            }else{
                logicaDeCompra(10000, cantidad)
            }
            break
        case 2:
            cantidad = parseInt(prompt("¿Cuantas placa madre desea comprar?"))
            if(cantidad < 1){
                alert("Ingresa un valor mayor a 0")
            }else{
                logicaDeCompra(20000, cantidad)
            }
            break
        case 3:
            cantidad = parseInt(prompt("¿Cuantos tarjeta graficas desea comprar?"))
            if(cantidad < 1){
                alert("Ingresa un valor mayor a 0")
            }else{
                logicaDeCompra(100000, cantidad)
            }
            break
        case 4:
            cantidad = parseInt(prompt("¿Cuantos procesadores desea comprar?"))
            if(cantidad < 1){
                alert("Ingresa un valor mayor a 0")
            }else{
                logicaDeCompra(80000, cantidad)
            }
            break
        case 5:
            cantidad = parseInt(prompt("¿Cuantas memoria RAM desea comprar?"))
            if(cantidad < 1){
                alert("Ingresa un valor mayor a 0")
            }else{
                logicaDeCompra(40000, cantidad)
            }
            break
        case 6: 
            cantidad = parseInt(prompt("¿Cuantos discos duros desea comprar?"))
            if(cantidad < 1){
                alert("Ingresa un valor mayor a 0")
            }else{
                logicaDeCompra(50000, cantidad)
            }
            break
        default:
            alert("Ese componente no lo tenemos, ante cualquier duda no consulte en contactarse con nosotros")
    }
    if(totalDeCompra !== 0){
        alert("El total es de: " + totalDeCompra)
    }
    bandera = confirm("¿Quiere seguir comprando?")
}
alert (" El total de compra es: " + totalDeCompra)

bandera = true

while(bandera){
    const pago = prompt("Los metodos de pago son los siguientes: \n\n-" + metodosDePago.join("\n-") + "\n\n ¿Como desea pagar?").toLowerCase()
    bandera = !confirm("¿Desea confirmar su compra?")
    logicaDePago(pago)
}


function logicaDePago(pago) {
    switch (pago) {
        case "efectivo":
            alert (" El total de compra es: " + totalDeCompra)
            !confirm("comuniquese al siguiente numero para poder coordinar un encuentro formal")
            break
        case "debito":
            alert (" El total de compra es: " + totalDeCompra)
            !confirm("Perfecto, Apenas pague le llegara la factura a su correo electronico")
            break
        case "credito":
            alert (" El total de compra es: " + totalDeCompra)
            !confirm("Tiene hasta 12 cuotas sin interes")
            break
        case "mercado pago":
            alert ("Abonando por mercado pago tiene un 5% mas, el total de compra es: " + totalDeCompra * 1.10)
            !confirm("Gracias por su compra")
            break
        default:
            confirm("No tenemos ese metodo de pago por el momento, por favor eliga uno de las opciones, ante cualquir consulta no dude en comunicarse con nosotros") 
            break
    }
}