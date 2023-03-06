import { checkComplete } from "./checkComplete.js";
import { deleteIcon } from "./delete.js";

export function addItem(event){
    event.preventDefault();
    const input = document.querySelector("[data-input]");
    const lista = document.querySelector("[data-list]");

    if(input.value != ""){
    //*Obteniendo y resetenado valor del input*/
    let tarea = input.value;
    input.value="";

    //*Creando y dando clase al elemento li
    const task = document.createElement('li');
    task.classList.add("lista__item");

    //*Agregando item al ul
    lista.appendChild(task);

    //*Creando el div interno
    const taskContent = document.createElement("div");
    taskContent.classList.add("lista__div");
    //*Agredando dimanicamente estado del boton check
    taskContent.appendChild(checkComplete()); 

    //*Agregando el div al elemento li
    task.appendChild(taskContent);

    //*Creando el titulo de la tarea, dandole valor del input y agregandolo al div
    const taskTile = document.createElement("span");
    taskTile.classList.add("item__titulo")
    taskTile.innerText = tarea;
    taskContent.appendChild(taskTile);

    //*Creando icono delete y agregandolo al elemento li
    task.appendChild(deleteIcon()); 
    }else{
        Swal.fire({ //*Mensaje de error SweetAlert2
            title: 'Ingresa una tarea',
            text: 'El campo de tarea no puede estar vacío',
            icon: 'warning',
            confirmButtonText: '¡Entendido!'
        })
    }

    
}