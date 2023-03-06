export function checkComplete(){
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square");
    i.addEventListener("click", completeTask);
    return i;
}

//*Cambiando el estado del check
const completeTask = (event)=>{
    const elemento = event.target;
    elemento.classList.toggle("fas");
    elemento.classList.toggle("completeIcon");
    elemento.classList.toggle("far");
    //*Obteniendo el titulo de la tarea
    const titulo = elemento.parentElement.lastChild;
    //*Agregando estilo
    titulo.classList.toggle("lista__item--complete")
};
