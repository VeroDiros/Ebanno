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

//Una función que ejecute una suma de 3 números, imprimir su resultado en la terminal con console.log().

function suma(x, y, z){
    resultadoSuma = x + y + z;
    console.log(resultadoSuma)
}

suma(5,47,3);
//Una función que ejecute una comparación de 2 números (mayor, menor, igual o diferentes), imprimir su resultado en la terminal con console.log().

function comparacion(sexo){

    if( sexo == "femenino" ) {
        console.log("Es una mujer")
    }else if( sexo == "masculino" ){
        console.log("Es un hombre")
    }else{
        console.log("Sexo indefinido")
    }
}
comparacion("femenino");
//Realizar las 2 funciones anteriores, pero como función flecha, imprimir su resultado en la terminal con console.log().

const sumaflecha = (x, y , z) => {
    resultadoSuma = x + y + z;
    console.log(resultadoSuma);  
}
sumaflecha(55, 3, 2);

const comparacionFlecha = (sexof)=>{
    if( sexof == "femenino" ) {
        console.log("Es una mujer")
    }else if( sexof == "masculino" ){
        console.log("Es un hombre")
    }else{
        console.log("Sexo indefinido")
    }
}
comparacionFlecha ("masculino");
//Crear un objeto con mínimo 5 key(clave) y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().

const perrito1 = {
    raza: 'chihuahua',
    color: 'naranja',
    vacunas: true,
    duenio:{
        nombre: 'Paola',
        edad: 17,
        sexod: "femenino"
    }
}

const {raza, duenio, color} = perrito1;
console.log(raza, duenio, color);
//Crear un arreglo que contenga: 1-string, 2-números, 1-array con 2 valores y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().

const arreglo = ["Veronica", 23, 1999, ["rosa", 2] ];
const [nombre, edad, anio] = arreglo;
console.log(nombre, edad, anio);
