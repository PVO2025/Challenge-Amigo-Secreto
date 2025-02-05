// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.addEventListener("DOMContentLoaded", () => {//"DOMContentLoaded" garantiza que el código JavaScript se ejecute solo cuando el HTML haya sido completamente cargado.
    const amigo = document.getElementById("amigo");
    const buttonAdd= document.querySelector(".button-add");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const buttonDraw= document.querySelector(".button-draw");

    buttonAdd.addEventListener("click", () => {//Esto significa que cada vez que el usuario haga clic en el botón, se ejecutará la función que está dentro
        const nombre = amigo.value.trim();

        if (nombre !== "") {//Se verifica si el usuario realmente escribió algo antes de agregar el nombre a la lista.
            const li = document.createElement("li");//document.createElement("li"): Crea un nuevo elemento de lista (<li>).
            li.textContent = nombre;//Asigna el texto ingresado por el usuario al nuevo elemento <li>.
            listaAmigos.appendChild(li);//listaNombres.appendChild(li): Agrega el nuevo <li> dentro de la lista <ul> para que aparezca en la página.
            amigo.value = ""; // Limpiar el campo
            amigo.focus(); // Focalizar el input nuevamente
        } else {
            alert("Por favor, ingresa un nombre válido.");
        }
    });



//Función para realizar el sorteo aleatorio
buttonDraw.addEventListener("click", () => {
    const nombres = Array.from(listaAmigos.getElementsByTagName("li")); // Convertir la lista <li> a un array

    if (nombres.length === 0) {
        alert("No hay nombres en la lista. Añade nombres primero.");
    } else {
        const indiceAleatorio = Math.floor(Math.random() * nombres.length); // Obtener un índice aleatorio
        const amigoSorteado = nombres[indiceAleatorio].textContent; // Obtener el nombre correspondiente

        resultado.textContent = `El amigo secreto es: ${amigoSorteado}`; // Mostrar el resultado
    }
});
});