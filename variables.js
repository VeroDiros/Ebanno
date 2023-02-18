//variable String
let usuario = "Veronica";
var estadoCuenta = "";
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
descuento = 600;
console.log(precioCloset -= descuento);
console.log(precioCloset += precioComedor);

//Una función que ejecute una suma de 3 números, imprimir su resultado en la terminal con console.log().

function suma(x, y, z) {
    resultadoSuma = x + y + z;
    console.log(resultadoSuma)
}

suma(5, 47, 3);
//Una función que ejecute una comparación de 2 números (mayor, menor, igual o diferentes), imprimir su resultado en la terminal con console.log().

function comparacion(sexo) {

    if (sexo == "femenino") {
        console.log("Es una mujer")
    } else if (sexo == "masculino") {
        console.log("Es un hombre")
    } else {
        console.log("Sexo indefinido")
    }
}
comparacion("femenino");
//Realizar las 2 funciones anteriores, pero como función flecha, imprimir su resultado en la terminal con console.log().

const sumaflecha = (x, y, z) => {
    resultadoSuma = x + y + z;
    console.log(resultadoSuma);
}
sumaflecha(55, 3, 2);

const comparacionFlecha = (sexof) => {
    if (sexof == "femenino") {
        console.log("Es una mujer")
    } else if (sexof == "masculino") {
        console.log("Es un hombre")
    } else {
        console.log("Sexo indefinido")
    }
}
comparacionFlecha("masculino");
//Crear un objeto con mínimo 5 key(clave) y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().

const perrito1 = {
    raza: 'chihuahua',
    color: 'naranja',
    vacunas: true,
    duenio: {
        nombre: 'Paola',
        edad: 17,
        sexod: "femenino"
    }
}

const { raza, duenio, color } = perrito1;
console.log(raza, duenio, color);
//Crear un arreglo que contenga: 1-string, 2-números, 1-array con 2 valores y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().

const arreglo = ["Veronica", 23, 1999, ["rosa", 2]];
const [nombre, edad, anio] = arreglo;
console.log(nombre, edad, anio);

//Declara una variable “let edad = Number”, luego crea un condicional “if” donde hagas una comparación, si la edad es mayor o igual a 18, imprime en consola “VÁLIDO”. De lo contrario “NO VÁLIDO”.
let edad1 = 16;
if (edad1 >= 18) {
    console.log("VÁLIDO")
} else {
    console.log("NO VÁLIDO")
}
//Crea un array que contenga mínimo 4 objetos, que a su vez contengan como mínimo 3 claves e imprime todo el array en consola con un bucle “for”.
let mascotas = [
    { animal: 'perro', color: 'café', tamaño: 'mediano', raza: 'cocker spanish' },
    { animal: 'caballo', color: 'negro', tamaño: 'grande', raza: 'pura sangre' },
    { animal: 'pez', color: 'naranja con rayas blancas y negras', tamaño: 'mediano', raza: 'pez payaso' },
    { animal: 'hamster', color: 'gris', tamaño: 'pequeño', raza: 'ruso' }
];

for (i = 0; i < mascotas.length; i++) {
    console.log('Mis mascotas son: un ' + mascotas[i].animal + " " + mascotas[i].tamaño + " de color " + mascotas[i].color + " y es raza " + mascotas[i].raza);
}

//Crear un bucle switch donde simula la venta de entradas al cine. Donde dependiendo de la edad el cliente recibe alguna promoción.
switch (edad1) {
    case 18:
        console.log("Tienes una promoción 2x1")
        break;
    case 60:
        console.log("Tienes una promoción 3x1")
        break;
    case 10:
        console.log("Los miercoles tu entrada es gratis!")
        break;
    default:
        console.log("Llevate unas palomitas grandes con un descuento del 30%")
}

/////////////////////////////         ACTIVDAD 8       /////////////////////////////////////
const muebles = [
    { tipo: 'comedor', stock: 8, precio: 1500.50, tipoMdera: 'pino', img: 'assets/' },
    { tipo: 'ropero', stock: 5, precio: 1200.60, tipoMdera: 'cedro', img: 'assets/' },
    { tipo: 'silla', stock: 10, precio: 500.00, tipoMdera: 'roble', img: 'assets/' },
    { tipo: 'closet', stock: 9, precio: 150.50, tipoMdera: 'caoba', img: 'assets/' },
    { tipo: 'buro', stock: 7, precio: 1800.80, tipoMdera: 'pino', img: 'assets/' },
    { tipo: 'tocador', stock: 2, precio: 2000.90, tipoMdera: 'arce', img: 'assets/' }

]

const tipoMueble = muebles.map(elemento => elemento.tipo)
console.log(tipoMueble);

const precio = muebles.filter(productos => productos.precio > 200)
console.log(precio);

const preciosP = muebles.map(producto => producto.precio)
console.log(preciosP);

const promedio = preciosP.reduce((anterior, actual) => anterior + actual / preciosP.length, 0)
console.log(promedio)

let ordenar = tipoMueble.sort((a, b) => {
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
});

console.log(ordenar);

let precioMax = 0;

muebles.forEach(element => {
    console.log(element.precio);
    precioMax = Math.max(element.precio, precioMax);
    precioMaxR = Math.round(precioMax);

});
console.log('El precio máximo es:', precioMax);
console.log('El precio máximo redondeado es:', precioMaxR);



/////////////////////////////////////////////          /////////////////////////////
