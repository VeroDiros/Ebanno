const muebles= [
    {tipo: 'Comedor', stock: 8, precio: 1500.50, tipoMdera: 'Pino', img: './assets'},
    {tipo: 'Ropero', stock: 5, precio: 1200.60, tipoMdera: 'Cedro', img: 'assets/'},
    {tipo: 'Silla', stock: 10, precio: 500.00, tipoMdera: 'Roble', img: 'assets/'},
    {tipo: 'Closet', stock: 9, precio: 150.50, tipoMdera: 'Caoba', img: 'assets/'},
    {tipo: 'Buró', stock: 7, precio: 1800.80, tipoMdera: 'Pino', img: 'assets/'},
    {tipo: 'Tocador', stock: 2, precio: 2000.90, tipoMdera: 'Arce', img: 'assets/'}

]

function getSelectValue(){
    document.getElementById("dropdownMenuButton1").onchange = function() {
        var seleccion=document.getElementById("dropdownMenuButton1").value;
     
        if(seleccion=="Alfabeticamente"){
        ordenar();
        }
        else if(seleccion=="dos"){
        }
        else if(seleccion="tres"){
        }
        else{
        }
        return false
     };
}

const tipoMueble = muebles.map(elemento => elemento.tipo)
console.log(tipoMueble); 

let ordenar  = tipoMueble.sort((a, b) => {
    if(a == b){
        return 0;
    }
    if(a < b){
        return -1;
    }
    return 1;
});