//Creamos el array amigos donde estrán los nombres
let amigos = [];
var nombre = '';
let indiceSorteo = 0;

//Creamos la función para agregar amigos al array.
function agregarAmigo() {
    //Declaramos la variable que nos ayudara a llenar el array desde el Id.
    nombre = document.getElementById('amigo').value;
 
    //Creamos la alerta por si el nombre esta vacío.
    if (nombre === '') {
        alert('Por favor ingresa un nombre valido');
        
     //Agregamos el nombre al array    
    } else {
        amigos.push(nombre);
        
    }
    //Reiniciamos el input.
    document.getElementById('amigo').value = '';
    //Realiza la función que crea la lista cada que se agrega un nombre:
    mostrarAmigos();
    return;
}
 
//Esta función es para crear la lista.
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(nombre => {
        lista.innerHTML += `<li>${nombre}</li>`; 
    });
    return;
}

//Esta funcion es para sortear al amigo secreto.
function sortearAmigo() {
    
    if (amigos.length == 0) {
        alert('Tu lista esta vacía, introduce nombres');
    } else {
    //Aqui generamos un indice aleatorio para elegir un nombre.    
    let indiceSorteo = Math.floor(Math.random()*amigos.length);
    const resultadoNombre = document.getElementById('resultado');
    resultadoNombre.innerHTML = `<li>Tu amigo secreto es ${amigos[indiceSorteo]}</li>`;
    }
    return;
}

