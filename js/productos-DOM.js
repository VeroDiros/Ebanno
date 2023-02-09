const muebles= [
    {tipo: 'comedor', stock: 8, precio: 1500.50, tipoMdera: 'pino', img: './assets'},
    {tipo: 'ropero', stock: 5, precio: 1200.60, tipoMdera: 'cedro', img: 'assets/'},
    {tipo: 'silla', stock: 10, precio: 500.00, tipoMdera: 'roble', img: 'assets/'},
    {tipo: 'closet', stock: 9, precio: 150.50, tipoMdera: 'caoba', img: 'assets/'},
    {tipo: 'buro', stock: 7, precio: 1800.80, tipoMdera: 'pino', img: 'assets/'},
    {tipo: 'tocador', stock: 2, precio: 2000.90, tipoMdera: 'arce', img: 'assets/'}
]

const contenedorProductos = document.getElementById("contenedorProductos");

muebles.array.forEach(mueble => {
    contenedorProductos.innerHTML =
    `
    <div class="item">
            <figure>
                <img src="assets/img/closet.png" class="card-img-top" alt="...">
            </figure>
            <div class="info-producto">
                <h5 class="card-title">${muebles.tipo}</h5>
                <p class="card-text">${muebles.precio}</p>
                <button> Añadir al carrito </button>
                <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
            </div>
        </div>
    `
})