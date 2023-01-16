//variable String
let usuario = "Veronica";
var estadoCuenta= "";
console.log(usuario);

//variable Number
let nPedidos = 4;
console.log(nPedidos);

//variable Boolean
let deuda = false;
console.log(deuda);


//variable Undefined
let Undefined;
console.log(Undefined);

//variable Null
let noEspecificar = null;
console.log(noEspecificar);

/*if(deuda == false){
    estadoCuenta = "no tiene deudas.";
    console.log(estadoCuenta)
}else{
    estadoCuenta = "tiene deudas.";
    console.log(estadoCuenta)
}*/

//Operador de Comparacion
var estadoCuenta = deuda == false ? "no tiene deudas" : "tiene deudas";

//Interpolacion
console.log(`${usuario} hizo ${nPedidos} pedidos. ${usuario} ${estadoCuenta}`); 

//Operadores
let precioComedor = 10230;
let precioCloset = 12500;

console.log(precioCloset + precioComedor);

console.log(precioCloset = precioComedor);
descuento= 600;
console.log(precioCloset -= descuento);
console.log(precioCloset += precioComedor);