const muebles= [
    {tipo: 'comedor', stock: 8, precio: 1500.50, tipoMdera: 'pino', img: './assets'},
    {tipo: 'ropero', stock: 5, precio: 1200.60, tipoMdera: 'cedro', img: 'assets/'},
    {tipo: 'silla', stock: 10, precio: 500.00, tipoMdera: 'roble', img: 'assets/'},
    {tipo: 'closet', stock: 9, precio: 150.50, tipoMdera: 'caoba', img: 'assets/'},
    {tipo: 'buro', stock: 7, precio: 1800.80, tipoMdera: 'pino', img: 'assets/'},
    {tipo: 'tocador', stock: 2, precio: 2000.90, tipoMdera: 'arce', img: 'assets/'}

]

function getSelectValue(){
    document.getElementById("myDropdown").onchange = function() {
        var sheet=document.getElementById("myDropdown").value;
     
        if(sheet=="uno"){
        ordenar();
        }
        else if(sheet=="dos"){
        }
        else if(sheet="tres"){
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