//Creamos el array amigos donde estrán los nombres
let amigos = [];

//Creamos la función para agregar amigos al array.
function agregarAmigo() {
    //Declaramos la variable que nos ayudara a llenar el array desde el Id.
    var nombre = document.getElementById('amigo').value;
 
    //Creamos la alerta por si el nombre esta vacío.
    if (nombre === '') {
        alert('Por favor ingresa un nombre valido');
        
     //Agregamos el nombre al array    
    } else {
        amigos.push(nombre);
        
    }
    //Reiniciamos el input.
    document.getElementById('amigo').value = '';
    return;
}
 
