const contadorCarrito = document.getElementById("contadorCarrito");
const contenidoCarrito =  document.getElementById("contenidoCarrito");


const mueblesr= [
    {id: 1, tipo: 'comedor', stock: 8, precio: 1500.50, tipoMdera: 'pino', img: './assets'},
    {id: 2,tipo: 'ropero', stock: 5, precio: 1200.60, tipoMdera: 'cedro', img: 'assets/'},
    {id: 3,tipo: 'silla', stock: 10, precio: 500.00, tipoMdera: 'roble', img: 'assets/'},
    {id: 4,tipo: 'closet', stock: 9, precio: 150.50, tipoMdera: 'caoba', img: 'assets/'},
    {id: 5,tipo: 'buro', stock: 7, precio: 1800.80, tipoMdera: 'pino', img: 'assets/'},
    {id: 6,tipo: 'tocador', stock: 2, precio: 2000.90, tipoMdera: 'arce', img: 'assets/'}
]

//Carrito

const carrito = [];

//funcion agregar al carrito
const agregarCarrito = (id, carrito) =>{
    const productoElegido = mueblesr.find(item => item.id === id);
    carrito.push(productoElegido);
    console.log("Se agrego exitosamente al carrito", carrito);
}

//Productos en el DOM

const contenedorProductos = document.getElementById("contenedorProductos");

mueblesr.forEach(mueble => {
    const div = document.createElement("div");
    div.innerHTML +=
    `   
        <div class="item">
                <figure>
                    <img src="assets/img/closet.png" class="card-img-top" alt="...">
                </figure>
                <div class="info-producto">
                    <h5 class="card-title">${mueble.tipo}</h5>
                    <p class="card-text">${mueble.precio}</p>
                    <button id="agregarCarrito${mueble.id}"> Añadir al carrito </button>
                    <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                </div>
            </div>
    `
    contenedorProductos.appendChild(div);

    const btnAgregarCarrito = document.getElementById(`agregarCarrito${mueble.id}`);
    btnAgregarCarrito.addEventListener("click", ()=> {
        agregarCarrito(mueble.id, carrito);
        agregarContadorCarrito();
    })
});//poner clase al boton

contenedorProductos.classList.add("contenedor-items");


//AGREGAR AL PRODUCTO CADA VE QUE SE SUME UN PRODUCTO


const agregarContadorCarrito = () => {
    if(carrito.length !== 0) {
        contadorCarrito.classList.add("contadorCarrito");
        contadorCarrito.textContent = carrito.length;
    }
}

//Funcion visualizar carrito
const actualizarCarrito = ()=>{
    carrito.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML =
        `
        <p>${mueble.tipo}</p>
        <p>${mueble.precio}</p>
        <p>Precio: ${mueble.tipoMdera}</p>
        `
    })
}
